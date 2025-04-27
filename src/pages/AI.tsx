import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Sparkles, Image, VideoIcon, Wand2, Send, Mic, Clock, Bookmark } from "lucide-react";
import { useState } from "react";

const AI = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setAiResponse(null);
    
    // Имитация генерации ответа через искусственную задержку
    setTimeout(() => {
      const responses = [
        "Создано видео с эффектом радужного градиента, применены технологии нейросетей для улучшения качества.",
        "Генерация завершена! Ваше видео с измененным стилем доступно для просмотра и скачивания.",
        "Ваш запрос обработан. Создано уникальное видео, объединяющее несколько стилей и визуальных эффектов.",
        "Нейросеть успешно трансформировала видео согласно вашим параметрам. Результат превзошел ожидания!",
        "Анализ завершен. Видео улучшено с помощью нейросетевых алгоритмов, добавлены спецэффекты."
      ];
      
      setAiResponse(responses[Math.floor(Math.random() * responses.length)]);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Заголовок страницы */}
        <section className="bg-gradient-to-r from-rainbow-blue via-rainbow-violet to-rainbow-indigo text-white">
          <div className="container py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Brain className="h-10 w-10" />
                </div>
              </div>
              <h1 className="text-3xl font-bold sm:text-4xl mb-4">Видео-нейросеть</h1>
              <p className="text-xl">
                Создавайте, редактируйте и трансформируйте видео с помощью искусственного интеллекта
              </p>
            </div>
          </div>
        </section>

        {/* Основная секция с нейросетью */}
        <section className="py-8 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="create" className="w-full">
                <TabsList className="mb-6 mx-auto grid w-full grid-cols-3">
                  <TabsTrigger value="create">
                    <Wand2 className="mr-2 h-4 w-4" />
                    Создание
                  </TabsTrigger>
                  <TabsTrigger value="edit">
                    <VideoIcon className="mr-2 h-4 w-4" />
                    Редактирование
                  </TabsTrigger>
                  <TabsTrigger value="style">
                    <Image className="mr-2 h-4 w-4" />
                    Стили
                  </TabsTrigger>
                </TabsList>

                {/* Вкладка создания видео */}
                <TabsContent value="create">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Создайте видео с помощью ИИ</h2>
                      <p className="text-muted-foreground mb-6">
                        Опишите, что должно быть в видео, и нейросеть создаст его для вас
                      </p>
                      
                      <div className="space-y-4">
                        <div className="relative">
                          <Input
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Опишите видео, которое хотите создать..."
                            className="pr-12"
                          />
                          <Button 
                            size="icon" 
                            variant="ghost" 
                            className="absolute right-1 top-1/2 transform -translate-y-1/2"
                          >
                            <Mic className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <Button variant="outline" onClick={() => setPrompt(prompt + " с радужным фоном")}>
                            радужный фон
                          </Button>
                          <Button variant="outline" onClick={() => setPrompt(prompt + " в стиле аниме")}>
                            стиль аниме
                          </Button>
                          <Button variant="outline" onClick={() => setPrompt(prompt + " с эффектом замедления")}>
                            замедление
                          </Button>
                        </div>

                        <Button 
                          className="w-full" 
                          onClick={handleGenerate}
                          disabled={isGenerating || !prompt.trim()}
                        >
                          {isGenerating ? (
                            <>
                              <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                              Генерация...
                            </>
                          ) : (
                            <>
                              <Wand2 className="mr-2 h-4 w-4" />
                              Создать видео
                            </>
                          )}
                        </Button>

                        {aiResponse && (
                          <div className="mt-6 p-4 border rounded-lg bg-muted/30">
                            <div className="flex items-center mb-2">
                              <Brain className="h-5 w-5 mr-2 text-primary" />
                              <h3 className="font-medium">Результат генерации</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">{aiResponse}</p>
                            <div className="aspect-video bg-black/20 rounded-md flex items-center justify-center">
                              <div className="text-center p-4">
                                <VideoIcon className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">Предпросмотр сгенерированного видео</p>
                              </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                              <Button variant="default" size="sm">
                                <Bookmark className="mr-2 h-4 w-4" />
                                Сохранить
                              </Button>
                              <Button variant="outline" size="sm">
                                <Send className="mr-2 h-4 w-4" />
                                Поделиться
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Вкладка редактирования видео */}
                <TabsContent value="edit">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Редактирование видео с ИИ</h2>
                      <p className="text-muted-foreground mb-6">
                        Загрузите видео и применяйте умную обработку с помощью нейросети
                      </p>
                      
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center mb-6">
                        <VideoIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="text-lg font-medium mb-2">Перетащите видео сюда</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          или нажмите для выбора файла (MP4, MOV, AVI до 1GB)
                        </p>
                        <Button variant="outline">Выбрать видео</Button>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-medium">Команды для редактирования</h3>
                        <Input
                          placeholder="Опишите, что нужно изменить в видео..."
                          className="mb-2"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <AIFeatureCard
                            title="Улучшение качества" 
                            description="Повышение разрешения и четкости видео"
                            icon={<Sparkles className="h-5 w-5" />}
                          />
                          <AIFeatureCard
                            title="Удаление фона" 
                            description="Автоматическое удаление фона с видео"
                            icon={<Wand2 className="h-5 w-5" />}
                          />
                          <AIFeatureCard
                            title="Стабилизация" 
                            description="Исправление тряски и дрожания"
                            icon={<VideoIcon className="h-5 w-5" />}
                          />
                          <AIFeatureCard
                            title="Замедление/ускорение" 
                            description="Умное изменение скорости воспроизведения"
                            icon={<Clock className="h-5 w-5" />}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Вкладка стилей */}
                <TabsContent value="style">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4">Применение стилей к видео</h2>
                      <p className="text-muted-foreground mb-6">
                        Трансформируйте видео в различные художественные стили
                      </p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                        <StyleCard name="Неон" image="https://images.unsplash.com/photo-1549317336-206569e8475c?w=300&q=80" />
                        <StyleCard name="Аниме" image="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=300&q=80" />
                        <StyleCard name="Акварель" image="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=300&q=80" />
                        <StyleCard name="Винтаж" image="https://images.unsplash.com/photo-1597423498219-04418210d491?w=300&q=80" />
                        <StyleCard name="Радуга" image="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=300&q=80" />
                        <StyleCard name="Киберпанк" image="https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=300&q=80" />
                        <StyleCard name="Пиксель-арт" image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=300&q=80" />
                        <StyleCard name="Комикс" image="https://images.unsplash.com/photo-1632931426390-58e7666a5e0c?w=300&q=80" />
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-2">Загрузите своё видео для преобразования</h3>
                        <div className="flex space-x-4">
                          <div className="flex-1">
                            <Input placeholder="URL видео или загрузите файл" />
                          </div>
                          <Button>
                            <Wand2 className="mr-2 h-4 w-4" />
                            Применить
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Примеры работ */}
        <section className="py-12 bg-muted/30">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Примеры работ нейросети</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?w=600&q=80" 
                    alt="AI Video Example" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-medium">Трансформация пейзажа</h3>
                      <p className="text-sm text-white/80">Нейросеть изменила времена года на видео</p>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80" 
                    alt="AI Video Example" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-medium">Анимированный портрет</h3>
                      <p className="text-sm text-white/80">Оживление фотографии с помощью ИИ</p>
                    </div>
                  </div>
                </div>
              </div>
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

const AIFeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="border rounded-lg p-4 hover:bg-accent/10 cursor-pointer transition-colors">
      <div className="flex items-start gap-3">
        <div className="text-primary">{icon}</div>
        <div>
          <h4 className="font-medium">{title}</h4>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

const StyleCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="cursor-pointer group">
      <div className="aspect-square relative overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 p-2 text-white text-center">
          <span className="text-sm font-medium">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default AI;
