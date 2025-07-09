import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Globe, Instagram, Phone, Clock, ChefHat } from "lucide-react";
import bataHeroImage from "@/assets/batata-hero.jpg";
import logoIcon from "@/assets/logo-icon.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoIcon} alt="Batatachef Logo" className="w-12 h-12 rounded-full" />
              <div>
                <h1 className="text-2xl font-bold text-primary">Batatachef</h1>
                <p className="text-sm text-muted-foreground">Batata Recheada Artesanal</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ChefHat className="w-6 h-6 text-primary" />
              <Badge variant="secondary" className="text-primary">
                Aberto
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bataHeroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Batata Recheada
            </h2>
            <p className="text-xl md:text-2xl mb-6">
              Sabor autêntico e qualidade em cada mordida
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Instagram className="w-5 h-5 mr-2" />
                Siga-nos
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Globe className="w-5 h-5 mr-2" />
                Visite nosso site
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <ChefHat className="w-6 h-6 mr-2" />
                Sobre a Batatachef
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">
                Especializada em batatas recheadas artesanais, a Batatachef oferece uma experiência 
                gastronômica única com ingredientes frescos e receitas exclusivas. Cada batata é 
                cuidadosamente preparada para garantir o máximo de sabor e qualidade.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Batata Recheada</Badge>
                <Badge variant="secondary">Artesanal</Badge>
                <Badge variant="secondary">Ingredientes Frescos</Badge>
                <Badge variant="secondary">Qualidade Premium</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Location & Contact */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                Localização & Contato
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Santo Antônio do Pinhal, SP</p>
                    <p className="text-sm text-muted-foreground">
                      Av. Min. Nelson Hungria, 512 - Centro
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-medium">Horário de Funcionamento</p>
                    <p className="text-sm text-muted-foreground">
                      Consulte nosso Instagram para horários atualizados
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  onClick={() => window.open('https://instagram.com/batatachef.oficial', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  @batatachef.oficial
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://www.batatachef.com.br', '_blank')}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  www.batatachef.com.br
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Experimente nossos sabores únicos!
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Venha conhecer nossa variedade de batatas recheadas artesanais. 
                Cada uma preparada com carinho e ingredientes selecionados.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open('https://instagram.com/batatachef.oficial', '_blank')}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Siga no Instagram
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://www.batatachef.com.br', '_blank')}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Acesse o Site
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src={logoIcon} alt="Batatachef Logo" className="w-8 h-8 rounded-full" />
              <span className="text-xl font-bold text-primary">Batatachef</span>
            </div>
            <p className="text-muted-foreground">
              Batata Recheada Artesanal • Santo Antônio do Pinhal, SP
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://instagram.com/batatachef.oficial', '_blank')}
              >
                <Instagram className="w-4 h-4 mr-1" />
                Instagram
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://www.batatachef.com.br', '_blank')}
              >
                <Globe className="w-4 h-4 mr-1" />
                Site
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
