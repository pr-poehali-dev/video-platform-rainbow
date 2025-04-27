import Navbar from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, HelpCircle, MessageSquare, BookOpen, Mail } from "lucide-react";
import { useState } from "react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState(faqs);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setFilteredFaqs(faqs);
    } else {
      const filtered = faqs.filter(
        faq => 
          faq.question.toLowerCase().includes(query.toLowerCase()) ||
          faq.answer.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFaqs(filtered);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Заголовок страницы */}
        <section className="bg-gradient-to-r from-rainbow-green via-rainbow-blue to-rainbow-indigo text-white">
          <div className="container py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold sm:text-4xl mb-4">Центр помощи</h1>
              <p className="text-xl">
                Ответы на часто задаваемые вопросы и техническая поддержка
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
                placeholder="Поиск по вопросам..."
                className="pl-10"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </section>

        {/* Основная секция со вкладками */}
        <section className="py-8 bg-background">
          <div className="container px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="faq" className="max-w-3xl mx-auto">
              <TabsList className="mb-6 mx-auto">
                <TabsTrigger value="faq">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  FAQ
                </TabsTrigger>
                <TabsTrigger value="guides">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Руководства
                </TabsTrigger>
                <TabsTrigger value="contact">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Поддержка
                </TabsTrigger>
              </TabsList>

              <TabsContent value="faq">
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-muted-foreground">По вашему запросу ничего не найдено</p>
                    </div>
                  )}
                </Accordion>
              </TabsContent>

              <TabsContent value="guides">
                <div className="space-y-6">
                  <HelpCard 
                    title="Как загрузить видео" 
                    description="Пошаговая инструкция по загрузке видео на нашу платформу"
                    icon="📤"
                  />
                  <HelpCard 
                    title="Создание плейлистов" 
                    description="Узнайте, как организовать видео в удобные плейлисты"
                    icon="📋"
                  />
                  <HelpCard 
                    title="Настройка аккаунта" 
                    description="Как изменить информацию профиля и настроить приватность"
                    icon="⚙️"
                  />
                </div>
              </TabsContent>

              <TabsContent value="contact">
                <div className="space-y-6 bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Напишите нам</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Имя</label>
                        <Input id="name" placeholder="Введите ваше имя" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Тема обращения</label>
                      <Input id="subject" placeholder="Укажите тему вашего обращения" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                      <textarea 
                        id="message" 
                        className="w-full min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Опишите вашу проблему или вопрос"
                      />
                    </div>
                    <Button className="w-full sm:w-auto">
                      <Mail className="mr-2 h-4 w-4" />
                      Отправить сообщение
                    </Button>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Секция "Не нашли ответ?" */}
        <section className="py-12 bg-muted/30">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h2>
              <p className="text-muted-foreground mb-6">
                Наша команда поддержки готова помочь вам в любое время суток
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Mail className="mr-2 h-4 w-4" />
                  Написать в поддержку
                </Button>
                <Button variant="default">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Начать чат
                </Button>
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

const HelpCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => {
  return (
    <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="font-medium text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <Button variant="link" className="p-0 h-auto mt-2">Читать руководство →</Button>
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "Как создать аккаунт на РадугаВидео?",
    answer: "Для создания аккаунта на РадугаВидео нажмите на кнопку 'Регистрация' в правом верхнем углу главной страницы. Заполните форму с вашими данными, подтвердите email и следуйте инструкциям для завершения регистрации."
  },
  {
    question: "Как загрузить видео на платформу?",
    answer: "Чтобы загрузить видео, войдите в свой аккаунт, нажмите на кнопку 'Загрузить' в верхней панели. Выберите файл с вашего устройства, заполните информацию о видео (название, описание, теги) и нажмите 'Опубликовать'."
  },
  {
    question: "Какие форматы видео поддерживаются?",
    answer: "РадугаВидео поддерживает большинство популярных видеоформатов, включая MP4, AVI, MOV, WMV, FLV и WebM. Максимальный размер файла — 10 ГБ, максимальная продолжительность — 4 часа."
  },
  {
    question: "Как изменить настройки приватности видео?",
    answer: "Вы можете изменить настройки приватности в разделе 'Мои видео' вашего профиля. Для каждого видео доступны три опции: 'Публичное', 'По ссылке' и 'Личное'. Выберите подходящий вариант и сохраните изменения."
  },
  {
    question: "Как создать плейлист и добавить в него видео?",
    answer: "Для создания плейлиста перейдите в раздел 'Мои плейлисты' в профиле и нажмите 'Создать новый'. Чтобы добавить видео в плейлист, найдите нужное видео, нажмите на значок 'Добавить в плейлист' и выберите созданный плейлист из списка."
  },
  {
    question: "Что делать, если видео не воспроизводится?",
    answer: "Если видео не воспроизводится, попробуйте обновить страницу, очистить кеш браузера или использовать другой браузер. Убедитесь, что у вас стабильное интернет-соединение. Если проблема не решается, обратитесь в службу поддержки."
  },
  {
    question: "Как монетизировать контент на РадугаВидео?",
    answer: "Для монетизации контента вам необходимо присоединиться к партнерской программе. Требования: минимум 1000 подписчиков и 4000 часов просмотров за последние 12 месяцев. После одобрения заявки вы сможете получать доход от рекламы."
  },
  {
    question: "Как связаться с технической поддержкой?",
    answer: "Вы можете связаться с нашей технической поддержкой через форму обратной связи на странице 'Помощь', по электронной почте support@radugavideo.ru или через чат в реальном времени, доступный в нижнем правом углу сайта."
  },
  {
    question: "Можно ли изменить видео после публикации?",
    answer: "Да, вы можете отредактировать название, описание, теги и настройки приватности видео после публикации. К сожалению, заменить сам видеофайл невозможно — для этого нужно удалить видео и загрузить новую версию."
  },
  {
    question: "Как подать жалобу на нарушение авторских прав?",
    answer: "Если вы обнаружили контент, нарушающий ваши авторские права, перейдите на страницу видео, нажмите на '...' под видео и выберите 'Пожаловаться'. Выберите причину 'Нарушение авторских прав' и следуйте инструкциям для подачи официальной претензии."
  }
];

export default Help;
