import { NextResponse } from 'next/server';
import axios from 'axios';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; // Your YouTube API Key in .env.local
const CHANNEL_ID = 'UCyxANUH2srMZdE_kOWpWTyg'; // Channel ID for "The Brighter Side of Blue Podcast"

interface YouTubeVideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

interface YouTubeSearchResponse {
  items: YouTubeVideoItem[];
}

export async function GET() {
  try {
    const response = await axios.get<YouTubeSearchResponse>(
      'https://www.googleapis.com/youtube/v3/search',
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

    const videos = response.data.items.map((item: YouTubeVideoItem) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      publishDate: item.snippet.publishedAt,
    }));

    return NextResponse.json({ videos });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch YouTube videos' },
      { status: 500 }
    );
  }
}
