import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

export interface VideoProps {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: number;
  uploadedAt: string;
  duration: string;
}

const VideoCard = ({ video }: { video: VideoProps }) => {
  return (
    <Link to={`/video/${video.id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1">
        <CardContent className="p-0 relative">
          <img 
            src={video.thumbnail} 
            alt={video.title} 
            className="aspect-video w-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 rounded">
            {video.duration}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start p-3">
          <h3 className="font-medium line-clamp-2 text-sm">{video.title}</h3>
          <div className="flex flex-col mt-1 w-full">
            <p className="text-xs text-muted-foreground">{video.channel}</p>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <span>{formatViews(video.views)} просмотров</span>
              <span className="mx-1">•</span>
              <span>{video.uploadedAt}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

// Форматирование числа просмотров
const formatViews = (views: number): string => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
};

export default VideoCard;
