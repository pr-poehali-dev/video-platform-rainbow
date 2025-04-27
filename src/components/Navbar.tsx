import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { Home, Play, User, Search, FileText, HelpCircle, Brain } from "lucide-react";

const Navbar = () => {
  return (
    <div className="border-b sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl mr-8">
          <Play className="h-6 w-6 text-primary" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rainbow-red via-rainbow-blue to-rainbow-violet">
            РадугаВидео
          </span>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Home className="mr-2 h-4 w-4" />
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Play className="mr-2 h-4 w-4" />
                Категории
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {categories.map((category) => (
                    <Link
                      key={category.title}
                      to={category.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{category.title}</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {category.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/articles">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <FileText className="mr-2 h-4 w-4" />
                  Статьи
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/ai">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Brain className="mr-2 h-4 w-4" />
                  Нейросеть
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/search">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Search className="mr-2 h-4 w-4" />
                  Поиск
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/help">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Помощь
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="ml-auto flex items-center">
          <Link 
            to="/profile" 
            className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
          >
            <User className="h-4 w-4" />
            <span>Профиль</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const categories = [
  {
    title: "Развлечения",
    description: "Смешные видео, пранки, челленджи и другой развлекательный контент",
    href: "/category/entertainment",
  },
  {
    title: "Музыка",
    description: "Музыкальные клипы, концерты, каверы и живые выступления",
    href: "/category/music",
  },
  {
    title: "Образование",
    description: "Обучающие видео, лекции, туториалы и познавательный контент",
    href: "/category/education",
  },
  {
    title: "Спорт",
    description: "Спортивные трансляции, тренировки, обзоры матчей",
    href: "/category/sports",
  },
];

export default Navbar;
