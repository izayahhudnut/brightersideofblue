"use client"

import { useState } from "react"
import { useChat } from "ai/react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, X } from "lucide-react"
import { Button } from "@/components/ui/Chatbot"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

export default function ModernChatbot() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-background w-80 h-[500px] rounded-lg shadow-sm flex flex-col overflow-hidden bg-white rounded-xl shadow-gray-700"
          >
            <div className="flex justify-between items-center p-4 border-b bg-white">
              <div className="flex items-center space-x-2">
                <Image 
                  src="minilogo.svg"
                  width="25"
                  height="25"
                  alt=""
                />
                <h3 className="font-semibold">Whats on your mind?</h3>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleChat}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <ScrollArea className="flex-1 p-4">
              {messages.map((m) => (
                <div key={m.id} className={`mb-4 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-xl ${
                      m.role === "user" ? "bg-blue-500 text-white" : "bg-muted border border-opacity-60"
                    }`}
                  >
                    <ReactMarkdown
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        a: (props) => <a className="font-bold underline" {...props} />,
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
            </ScrollArea>
            <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
              <div className="flex space-x-2 rounded">
                <Input
                  className="flex-grow rounded-xl"
                  value={input}
                  placeholder="Type a message..."
                  onChange={handleInputChange}
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
          <Button onClick={toggleChat} className="rounded-full w-12 h-12 shadow-lg bg-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </Button>
        </motion.div>
      )}
    </div>
  )
}
