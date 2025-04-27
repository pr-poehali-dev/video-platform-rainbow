import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { VideoProps } from "@/components/VideoCard";
import VideoCard from "@/components/VideoCard";
import { Edit, Settings, Upload } from "lucide-react";

const Profile = () => {
  // Моковые данные пользователя
  const user = {
    name: "Александр Петров",
    username: "@alex_petrov",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    followers: 1256,
    following: 342,
    joined: "Май 2023",
    bio: "Создатель контента о путешествиях и технологиях. Люблю открывать новые места и делиться опытом."
  };
  
  // Моковые данные видео пользователя
  const userVideos: VideoProps[] = [
    {
      id: "u1",
      title: "Мое путешествие по Японии - лучшие места и советы",
      thumbnail: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1000",
      channel: user.name,
      views: 45600,
      uploadedAt: "3 месяца назад",
      duration: "24:18"
    },
    {
      id: "u2",
      title: "Обзор новой камеры Sony A7IV - тесты и примеры фото",
      thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000",
      channel: user.name,
      views: 32400,
      uploadedAt: "1 месяц назад",
      duration: "18:45"
    },
    {
      id: "u3",
      title: "Как я организовал удаленную работу - полезные советы",
      thumbnail: "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=1000",
      channel: user.name,
      views: 28900,
      uploadedAt: "2 недели назад",
      duration: "15:22"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <div className="flex flex-col">
          {/* Профильная информация */}
          <div className="border-b pb-8">
            <div className="relative h-48 w-full rounded-lg rainbow-bg mb-16">
              <div className="absolute -bottom-12 left-6">
                <Avatar className="h-24 w-24 border-4 border-background">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback>АП</AvatarFallback>
                </Avatar>
              </div>
            </div>
            
            <div className="flex justify-between items-start">
              <div className="ml-6">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-muted-foreground">{user.username}</p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span><strong>{user.followers}</strong> подписчиков</span>
                  <span><strong>{user.following}</strong> подписок</span>
                  <span>Дата регистрации: {user.joined}</span>
                </div>
                <p className="mt-4 max-w-2xl">{user.bio}</p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Редактировать
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Настройки
                </Button>
              </div>
            </div>
          </div>
          
          {/* Табы с контентом */}
          <Tabs defaultValue="videos" className="mt-6">
            <TabsList>
              <TabsTrigger value="videos">Видео</TabsTrigger>
              <TabsTrigger value="playlists">Плейлисты</TabsTrigger>
              <TabsTrigger value="about">О канале</TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos" className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Мои видео</h2>
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Загрузить видео
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {userVideos.map(video => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
              
              {userVideos.length === 0 && (
                <Card className="text-center p-12">
                  <CardContent className="pt-6">
                    <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                    <h3 className="text-lg font-medium mb-2">Нет загруженных видео</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-4">
                      Начните делиться своим контентом с миром! Загрузите ваше первое видео прямо сейчас.
                    </p>
                    <Button>Загрузить видео</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="playlists" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Плейлисты</CardTitle>
                  <CardDescription>
                    Организуйте ваши видео в тематические плейлисты
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground py-12">
                    У вас пока нет созданных плейлистов
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="about" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>О канале</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">Описание</h3>
                    <p>{user.bio}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Дата регистрации</h3>
                    <p>{user.joined}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Статистика</h3>
                    <p>{userVideos.length} видео • {user.followers} подписчиков</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="border-t py-6 mt-8">
        <div className="container flex flex-col items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 РадугаВидео. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
