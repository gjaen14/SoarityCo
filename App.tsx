import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ScrollParticles } from './components/ScrollParticles';
import { Navbar } from './components/Navbar';
import { Button } from './components/ui/Button';
import { LoadingScreen } from './components/LoadingScreen';
import {
  Zap,
  Layers,
  Code,
  Cpu,
  Globe,
  Shield,
  Clock,
  TrendingUp,
  Plus,
  ShieldCheck,
  Star,
  ChevronDown,
  ArrowRight,
  Sparkles,
  FlaskConical
} from 'lucide-react';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setFormStatus('loading');

    // EmailJS Configuration - User must replace these with their own keys
    emailjs.sendForm(
      'service_zjokgni', // Replace with your Service ID
      'template_rkauc6a', // Replace with your Template ID
      formRef.current,
      '1Kd7sn6Ec1YXOnoqi' // Replace with your Public Key
    )
      .then((result) => {
        console.log(result.text);
        setFormStatus('success');
        formRef.current?.reset();
      }, (error) => {
        console.log(error.text);
        setFormStatus('error');
      });
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative w-full min-h-screen bg-brand-black text-white selection:bg-brand-accent selection:text-white">
      {/* Background System */}
      <ScrollParticles />

      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 text-center z-10">
        <div className="absolute inset-0 bg-transparent pointer-events-none" />

        <div className="space-y-8 animate-fade-in-up">

          <h1 className="text-xl md:text-6xl text-brand-neutral-mid font-light tracking-wide font-display">
            No todo lo resuelve
            <br />
            ejecutando más.
          </h1>

          <p className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed font-sans font-light">
            Ayudamos a marcas y empresas a ordenar, decidir y avanzar con criterio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="transparent" className="border-brand-accent/20 hover:bg-brand-accent/10 text-white/80" onClick={() => document.getElementById('focus')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Enfoque
            </Button>
            <Button variant="primary" className="bg-brand-accent hover:bg-brand-accent/90 text-brand-black font-bold" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Iniciar Diagnóstico
            </Button>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/70 font-sans">8.28</span>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 text-brand-accent">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Product Section -> Enfoque */}
      <section id="focus" className="relative py-32 px-6 z-10 bg-brand-black/20 border-t border-brand-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex md:items-end md:justify-between">
            <div>
              <h3 className="text-brand-accent font-bold tracking-widest uppercase mb-2 font-sans text-sm">Enfoque</h3>
              <h2 className="text-4xl md:text-6xl font-display font-medium text-brand-neutral-light italic">Criterio sobre ejecución</h2>
            </div>
            <p className="mt-4 md:mt-0 max-w-md text-white/40 font-sans font-light leading-relaxed">
              No construimos por inercia. <br />Tomamos decisiones con intención para generar impacto real y sostenible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-8 h-8" />, title: "Estrategia de Marca", desc: "Antes de diseñar o comunicar, definimos dirección. Entendemos el negocio, el contexto y el rol real de la marca antes de ejecutar.." },
              { icon: <Cpu className="w-8 h-8" />, title: "Diseño de Experiencia", desc: "La claridad también se diseña. Creamos experiencias limpias que eliminan fricción y transmiten confianza desde el primer contacto." },
              { icon: <Layers className="w-8 h-8" />, title: "Ecosistemas Digitales", desc: "Pensamos en sistemas, no en piezas aisladas. Diseñamos estructuras que permiten crecer sin acumular complejidad innecesaria." }
            ].map((feature, idx) => (
              <div key={idx} className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2">
                <div className="mb-6 p-4 rounded-full bg-brand-accent/5 w-fit text-brand-accent group-hover:text-brand-black group-hover:bg-brand-accent transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-display font-medium mb-3 text-brand-neutral-light">{feature.title}</h4>
                <p className="text-white/40 leading-relaxed font-sans font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Bridge Block: High-Contrast Narrative Break */}
      <section className="relative py-24 px-6 z-10 bg-brand-neutral-light text-brand-black border-y border-brand-accent/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Leading Image (Left) */}
          <div className="relative aspect-[3/2] md:aspect-square lg:aspect-[4/3] group overflow-hidden rounded-3xl border border-brand-black/5 shadow-xl">
            <img
              src="/assets/orden.jpg"
              alt="Estrategia y Orden"
              className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/orden.jpg';
              }}
            />
            <div className="absolute inset-0 bg-brand-black/5 group-hover:bg-transparent transition-colors duration-700 p-8 flex flex-col justify-end">
              <div className="font-display text-[10px] uppercase tracking-[0.4em] text-brand-black/40">
                Conceptual Logic / 02
              </div>
            </div>
          </div>

          {/* Strategic Text (Right) */}
          <div className="text-left space-y-10">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-brand-black italic leading-[1.1] animate-fade-in text-balance">
              “El orden no es estética. <br className="hidden lg:block" /> Es estrategia.”
            </h2>
            <div className="space-y-8 max-w-xl border-l border-brand-accent/30 pl-8 ml-2">
              <p className="text-brand-black/70 text-xl font-sans font-light leading-relaxed">
                La mayoría de los proyectos digitales no fallan por falta de talento, sino por decisiones mal tomadas y ejecuciones sin dirección.
              </p>
              <p className="text-brand-accent text-lg font-sans font-medium leading-relaxed italic">
                En Soarity, el orden es una forma de pensar: reducir el ruido, priorizar lo esencial y construir con absoluta claridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section -> Proceso */}
      <section id="process" className="relative py-32 px-6 z-10 bg-brand-black/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Abstract visual representation of ingredients */}
            <div className="aspect-square rounded-full border border-brand-accent/10 relative animate-spin-slow">
              <div className="absolute inset-4 rounded-full border border-dashed border-brand-accent/20"></div>
              <div className="absolute inset-1/4 rounded-full bg-brand-accent/5 border border-brand-accent/10 flex items-center justify-center">
                <FlaskConical className="w-16 h-16 text-brand-accent/50" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-brand-accent font-bold tracking-widest uppercase mb-2 font-sans text-sm">El Método</h3>
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-8 text-brand-neutral-light italic">La Fórmula del Orden</h2>
            <p className="text-white/40 mb-10 text-lg font-sans font-light leading-relaxed">
              La claridad es nuestra materia prima. Ordenamos la complejidad para avanzar con absoluta seguridad.
            </p>

            <div className="space-y-8">
              {[
                { label: "Claridad Estratégica", desc: "Comprensión profunda del problema, el mercado y las prioridades reales." },
                { label: "Densidad Creativa", desc: "Diseño y comunicación con intención." },
                { label: "Robustez Técnica", desc: "Infraestructura sólida y silenciosa." }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="font-display font-medium text-lg text-brand-neutral-light">{item.label}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-accent"></div>
                  </div>
                  <p className="mt-2 text-sm text-white/30 font-sans font-light">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-start pl-8 md:pl-20">
              <div className="bg-brand-black/80 p-6 rounded-2xl border border-brand-accent/20 inline-flex items-center gap-6 shadow-2xl backdrop-blur-sm hover:border-brand-accent/50 transition-all duration-500 transform hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-display font-bold text-brand-neutral-light">100%</div>
                <div className="text-sm text-brand-accent/60 uppercase tracking-widest font-sans font-medium">Codificación<br />Pura</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Section -> Impacto / Trabajo */}
      <section id="work" className="relative py-32 px-6 z-10 bg-brand-neutral-light/95 text-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-brand-accent font-bold tracking-widest uppercase mb-2 font-sans text-sm">Métricas de Valor</h3>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-brand-black italic">Resultados con Propósito</h2>
            <p className="mt-4 text-brand-black/60 max-w-2xl mx-auto font-sans font-light text-lg">
              No son objetivos. Son el resultado de trabajar con claridad, criterio y estructura.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-brand-black/5 border border-brand-black/5 rounded-2xl overflow-hidden shadow-2xl shadow-brand-black/5">
            {[
              { label: "Tiempo de Carga", value: "< 0.5s", sub: "Velocidad sin fricción", icon: <Clock className="w-5 h-5 mx-auto mb-4 text-brand-accent" /> },
              { label: "Claridad de Marca", value: "100%", sub: "Mensaje claro, sin interferencias", icon: <Shield className="w-5 h-5 mx-auto mb-4 text-brand-accent" /> },
              { label: "Disponibilidad", value: "99.9%", sub: "Confianza operativa constante", icon: <Layers className="w-5 h-5 mx-auto mb-4 text-brand-accent" /> },
              { label: "Escalabilidad", value: "+200%", sub: "Crecimiento sin perder control", icon: <TrendingUp className="w-5 h-5 mx-auto mb-4 text-brand-accent" /> }
            ].map((stat, idx) => (
              <div key={idx} className="bg-brand-neutral-light p-10 text-center hover:bg-brand-neutral-mid transition-colors duration-500">
                {stat.icon}
                <div className="text-4xl lg:text-5xl font-display font-bold mb-2 text-brand-black">{stat.value}</div>
                <div className="font-bold text-xs uppercase tracking-widest text-brand-black/40 mb-1 font-sans">{stat.label}</div>
                <div className="text-xs text-brand-black/60 font-sans italic">{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[10px] text-brand-black/30 uppercase tracking-[0.2em] font-sans">* Basado en resultados promedio para clientes de Soarity en 2024</p>
          </div>
        </div>
      </section >


      {/* FAQ Section */}
      < section id="faq" className="relative py-32 px-6 z-10 border-t border-brand-accent/10 bg-brand-black/30" >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-medium mb-12 text-center text-brand-neutral-light italic">Protocolos de Trabajo</h2>
          <div className="space-y-4">
            {[
              { q: "¿Soarity es una agencia tradicional?", a: "No. Somos un estudio estratégico. No ejecutamos por volumen ni trabajamos con paquetes estándar. Cada proyecto parte de claridad, criterio y estructura." },
              { q: "¿Ofrecen mantenimiento constante?", a: "Sí, proporcionamos soporte de sistemas y actualizaciones de seguridad continuas." },
              { q: "¿Qué tipo de proyectos no toman?", a: "No tomamos proyectos que buscan solo ejecución rápida, parches o soluciones aisladas. Trabajamos con marcas y empresas que valoran el orden, la claridad y el crecimiento sostenido." },
              { q: "¿Qué sucede después de la entrega?", a: "Dependiendo del proyecto, podemos acompañar la evolución del sistema, optimizarlo o escalarlo. El objetivo no es “terminar”, es que funcione en el tiempo." }
            ].map((item, idx) => (
              <details key={idx} className="group bg-white/[0.01] rounded-xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-brand-accent/30">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <div className="flex items-center gap-6">
                    <span className="text-brand-accent/30 font-display italic text-xl">0{idx + 1}</span>
                    <span className="font-display font-medium text-xl text-brand-neutral-light">{item.q}</span>
                  </div>
                  <span className="text-brand-accent transform group-open:rotate-45 transition-transform duration-500">
                    <Plus className="w-6 h-6" />
                  </span>
                </summary>
                <div className="px-20 pb-8 text-white/50 leading-relaxed font-sans font-light text-lg">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="relative py-32 px-6 z-10 bg-brand-black/40" >
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-brand-accent/20">
          <div className="bg-[#0F0F0F]/80 p-8 md:p-16 text-center relative">
            {/* Background decorative blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg bg-brand-accent/5 blur-[120px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-display font-medium mb-6 text-brand-neutral-light italic">¿Listo para avanzar?</h2>
              <p className="text-xl text-white/40 mb-12 max-w-2xl mx-auto font-sans font-light">
                Inicia un diagnóstico con nosotros. Construyamos el futuro de tu marca con propósito.
              </p>

              <form
                ref={formRef}
                className="max-w-md mx-auto space-y-6 text-left"
                onSubmit={sendEmail}
              >
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-2 block font-sans">Identidad</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Tu Nombre"
                    required
                    className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-brand-accent transition-colors text-white font-sans font-light placeholder:text-white/10"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-2 block font-sans">Coordenadas</label>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="Correo Electrónico"
                    required
                    className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-brand-accent transition-colors text-white font-sans font-light placeholder:text-white/10"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-2 block font-sans">Transmisión</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                    className="w-full bg-transparent border-b border-white/10 p-4 focus:outline-none focus:border-brand-accent transition-colors text-white font-sans font-light placeholder:text-white/10 resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className={`w-full justify-center text-lg py-5 transition-all duration-500 ${formStatus === 'success' ? 'bg-green-500/20 text-green-400 border-green-500/50' :
                      formStatus === 'error' ? 'bg-red-500/20 text-red-400 border-red-500/50' :
                        'bg-brand-accent text-brand-black'
                      } font-bold hover:bg-brand-accent/90`}
                  >
                    {formStatus === 'loading' ? 'Transmitiendo...' :
                      formStatus === 'success' ? '✓ Transmisión Recibida' :
                        formStatus === 'error' ? '✕ Fallo en el Sistema' :
                          'Enviar Transmisión'}
                    {formStatus === 'idle' && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </div>

                {formStatus === 'success' && (
                  <p className="text-center text-xs text-brand-accent mt-4 font-sans tracking-widest uppercase animate-pulse">
                    Tu mensaje ha sido cifrado y enviado con éxito.
                  </p>
                )}
                {formStatus === 'error' && (
                  <p className="text-center text-xs text-red-400 mt-4 font-sans tracking-widest uppercase">
                    Error en la conexión. Por favor, intenta de nuevo.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-brand-accent/10 z-10 bg-brand-black text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-sans text-white/30 text-xs tracking-widest uppercase">&copy; 2024 Soarity & Co. Todos los derechos reservados.</div>
          <div className="flex gap-8">
            {[
              { label: 'Instagram', href: 'https://www.instagram.com/soarityco/' },
              { label: 'WhatsApp', href: 'https://wa.me/50761724545' }
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="font-sans text-xs uppercase tracking-widest text-brand-accent/50 hover:text-brand-accent transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;