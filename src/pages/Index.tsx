import Navbar from "@/components/Navbar";
import VideoCard, { VideoProps } from "@/components/VideoCard";
import { useState } from "react";

const Index = () => {
  const [featuredVideos] = useState<VideoProps[]>(MOCK_VIDEOS);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero секция с радужным фоном */}
        <section className="rainbow-bg text-white">
          <div className="container py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Открой мир видео в ярких красках
              </h1>
              <p className="mt-6 text-xl max-w-2xl mx-auto">
                Смотри, загружай и делись своими любимыми видео на РадугаВидео - твоей новой платформе для творчества
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <a 
                  href="#trending" 
                  className="rounded-md bg-white text-gray-900 px-6 py-3 text-base font-medium shadow-sm hover:bg-gray-100"
                >
                  Популярное
                </a>
                <a 
                  href="/upload" 
                  className="rounded-md bg-black/40 backdrop-blur-sm px-6 py-3 text-base font-medium hover:bg-black/60"
                >
                  Загрузить видео
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Секция с трендовыми видео */}
        <section id="trending" className="py-12 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Популярное сейчас</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {featuredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>

        {/* Секция с категориями */}
        <section className="py-12 bg-muted/50">
          <div className="container px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Просмотр по категориям</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <CategoryCard title="Развлечения" icon="🎭" color="bg-rainbow-red" />
              <CategoryCard title="Музыка" icon="🎵" color="bg-rainbow-yellow" />
              <CategoryCard title="Образование" icon="📚" color="bg-rainbow-green" />
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="border-t py-6 bg-background">
        <div className="container flex flex-col items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 РадугаВидео. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

const CategoryCard = ({ title, icon, color }: { title: string; icon: string; color: string }) => {
  return (
    <div className={`${color} text-white rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="mt-2 text-white/80 text-sm">Смотреть видео</p>
    </div>
  );
};

// Моковые данные для видео
const MOCK_VIDEOS: VideoProps[] = [
  {
    id: "1",
    title: "Как приготовить идеальную пасту карбонара - пошаговый рецепт",
    thumbnail: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=1000",
    channel: "ГурманТВ",
    views: 1245678,
    uploadedAt: "2 недели назад",
    duration: "12:34"
  },
  {
    id: "2",
    title: "Топ-10 самых красивых мест для путешествий в 2025 году",
    thumbnail: "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?q=80&w=1000",
    channel: "ТравелГид",
    views: 879532,
    uploadedAt: "3 дня назад",
    duration: "18:21"
  },
  {
    id: "3",
    title: "Утренняя тренировка для всего тела - 15 минут и максимум результата",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000",
    channel: "ФитнесПро",
    views: 456789,
    uploadedAt: "1 неделя назад",
    duration: "15:45"
  },
  {
    id: "4",
    title: "Обзор новой модели iPhone 16 Pro - стоит ли покупать?",
    thumbnail: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1000",
    channel: "ТехноОбзор",
    views: 2345678,
    uploadedAt: "5 дней назад",
    duration: "22:17"
  },
  {
    id: "5",
    title: "Базовые принципы построения пассивного дохода в 2025 году",
    thumbnail: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1000",
    channel: "ФинансыПлюс",
    views: 567890,
    uploadedAt: "2 дня назад",
    duration: "32:09"
  },
  {
    id: "6",
    title: "Как я переехал жить в Барселону и что из этого вышло",
    thumbnail: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1000",
    channel: "ЭкспатЖизнь",
    views: 789123,
    uploadedAt: "4 дня назад",
    duration: "27:33"
  },
  {
    id: "7",
    title: "Лучшие книжные новинки апреля 2025 - что почитать?",
    thumbnail: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000",
    channel: "КнигоЛюб",
    views: 342156,
    uploadedAt: "1 день назад",
    duration: "14:52"
  },
  {
    id: "8",
    title: "История успеха: как я создал миллионный бизнес за 2 года",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000",
    channel: "БизнесМентор",
    views: 1890345,
    uploadedAt: "1 неделя назад",
    duration: "41:27"
  }
];

export default Index;
