import { NextResponse } from 'next/server';
import axios from 'axios';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = 'UCOTtfow0oTKzQfJv_AO2Wzw'; // The Brighter Side of Blue Podcast

export async function GET() {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: 'snippet',
          channelId: CHANNEL_ID,
          maxResults: 3,
          order: 'date',
          type: 'video',
          key: YOUTUBE_API_KEY,
        },
      }
    );

    const videos = response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      publishDate: item.snippet.publishedAt,
    }));

    return NextResponse.json({ videos });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json({ error: 'Failed to fetch YouTube videos' }, { status: 500 });
  }
}
