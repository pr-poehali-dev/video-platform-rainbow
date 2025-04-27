import Navbar from "@/components/Navbar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Search, Clock, ThumbsUp, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: string;
  likes: number;
  category: string;
}

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles] = useState<Article[]>(generateArticles());
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Заголовок страницы */}
        <section className="bg-gradient-to-r from-rainbow-violet via-rainbow-blue to-rainbow-red text-white">
          <div className="container py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold sm:text-4xl mb-4">Статьи и обзоры</h1>
              <p className="text-xl">
                Интересные материалы о видео, технологиях и трендах медиа-индустрии
              </p>
            </div>
          </div>
        </section>

        {/* Поисковая строка */}
        <section className="bg-background py-6 border-b">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="text"
                placeholder="Поиск по статьям..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Вкладки и список статей */}
        <section className="py-8 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="all" className="max-w-5xl mx-auto">
              <TabsList className="mb-6 mx-auto">
                <TabsTrigger value="all">Все статьи</TabsTrigger>
                <TabsTrigger value="tech">Технологии</TabsTrigger>
                <TabsTrigger value="reviews">Обзоры</TabsTrigger>
                <TabsTrigger value="tutorials">Туториалы</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tech">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles
                    .filter(article => article.category === "tech")
                    .map(article => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles
                    .filter(article => article.category === "reviews")
                    .map(article => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="tutorials">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles
                    .filter(article => article.category === "tutorials")
                    .map(article => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
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

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link to={`/article/${article.id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-all duration-200 hover:-translate-y-1 h-full flex flex-col">
        <div className="relative">
          <img 
            src={article.image} 
            alt={article.title} 
            className="aspect-video w-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            {getCategoryLabel(article.category)}
          </div>
        </div>
        <CardContent className="py-4 flex-grow">
          <h3 className="font-medium text-lg mb-2 line-clamp-2">{article.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {article.excerpt}
          </p>
        </CardContent>
        <CardFooter className="pt-0 pb-4 flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center">
            <ThumbsUp className="h-3 w-3 mr-1" />
            <span>{article.likes}</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-3 w-3 mr-1" />
            <span>{article.publishedAt}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

function getCategoryLabel(category: string): string {
  switch (category) {
    case "tech": return "Технологии";
    case "reviews": return "Обзоры";
    case "tutorials": return "Туториалы";
    default: return category;
  }
}

function generateArticles(): Article[] {
  const categories = ["tech", "reviews", "tutorials"];
  const authors = ["Анна Смирнова", "Иван Петров", "Елена Козлова", "Дмитрий Иванов", "Мария Соколова"];
  
  const articleTitles = [
    "Как снимать качественные видео на смартфон: советы профессионалов",
    "Топ-10 приложений для монтажа видео в 2025 году",
    "Обзор новой камеры Sony Alpha 8: революция в видеосъемке",
    "Освещение для видеоблогеров: как создать студию на дому",
    "Как набрать первую 1000 подписчиков на видеоплатформе",
    "Тренды видеоконтента: что будет популярно в 2026 году",
    "Как правильно оптимизировать видео для поисковых систем",
    "Обзор новых функций Adobe Premiere Pro 2025",
    "Звук в видео: как добиться профессионального качества",
    "Сравнение популярных микрофонов для видеосъемки",
    "Нейросети в видеопроизводстве: революция уже началась",
    "Как создать вирусный видеоролик: секреты успеха",
    "Психология цвета в видеоконтенте: как влиять на зрителя",
    "Дроны для видеосъемки: выбор и советы по использованию",
    "Как создавать видеоконтент для разных социальных платформ",
    "Эволюция видеоформатов: от VHS до 8K",
    "Стоковые видео: как на них заработать в 2025 году",
    "Как создать сценарий для видеоролика: пошаговое руководство",
    "Обзор новых видеокодеков: эффективность и качество",
    "Монетизация видеоконтента: современные стратегии"
  ];

  function generateExcerpt(title: string): string {
    const baseExcerpts = [
      "В этой статье мы рассмотрим основные принципы и подходы к",
      "Детальный разбор и практические советы по теме",
      "Полный анализ возможностей и функций для",
      "Экспертное мнение и рекомендации о том, как улучшить",
      "Современные тенденции и перспективы развития в области"
    ];
    
    return `${baseExcerpts[Math.floor(Math.random() * baseExcerpts.length)]} ${title.toLowerCase()}.`;
  }

  const articles: Article[] = [];

  for (let i = 1; i <= 100; i++) {
    const titleIndex = (i - 1) % articleTitles.length;
    const title = i <= articleTitles.length 
      ? articleTitles[titleIndex] 
      : `${articleTitles[titleIndex]} - часть ${Math.ceil(i / articleTitles.length)}`;
    
    articles.push({
      id: i.toString(),
      title,
      excerpt: generateExcerpt(title),
      image: `https://source.unsplash.com/random/800x450?video,tech&sig=${i}`,
      author: authors[Math.floor(Math.random() * authors.length)],
      publishedAt: `${Math.floor(Math.random() * 28) + 1}.${Math.floor(Math.random() * 12) + 1}.2025`,
      readTime: `${Math.floor(Math.random() * 20) + 3} мин`,
      likes: Math.floor(Math.random() * 1500) + 50,
      category: categories[Math.floor(Math.random() * categories.length)]
    });
  }

  return articles;
}

export default Articles;
