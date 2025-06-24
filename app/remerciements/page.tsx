"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  CheckCircle,
  Star,
  Clock,
  Shield,
  Heart,
  Download,
  Mail,
  Stethoscope,
  Leaf,
  Brain,
  Apple,
  Microscope,
  UserCheck,
  BookOpen,
  Award,
  Sparkles,
  Target,
  TrendingUp,
  Gift,
  Timer,
  ArrowRight,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { AnimatedCard } from "@/components/AnimatedCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import logo from "../../public/images/Logo_sans_fond.png";
import Image from "next/image";
import Link from "next/link";

export default function MerciPage() {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes en secondes
  const [isOfferExpired, setIsOfferExpired] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setIsOfferExpired(true);
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 pt-20">
      {/* Header avec logo */}
      <header className="py-6 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-[200px] md:-mt-16 h-[200px] rounded-full bg-white p-2 relative">
              <Image
                src={logo}
                fill
                className="object-contain w-full h-full"
                alt="Logo CSB Klinik"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Section de remerciement */}
      <section className="py-16 md:py-10">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 360, 0],
              }}
              transition={{ duration: 2 }}
            >
              <CheckCircle className="h-12 w-12 text-green-600" />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              🎉 Félicitations !
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Votre guide gratuit{" "}
              <strong>"La Bonne Attitude Face à la Cystite"</strong> a été
              envoyé dans votre boîte mail.
              <br />
              Vérifiez vos emails (et vos spams) dans les prochaines minutes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-green-600">
                <Mail className="h-5 w-5" />
                <span className="font-medium">Email envoyé avec succès</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Offre spéciale - Diagnostic personnalisé */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-500 to-purple-600 text-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection direction="up" className="text-center mb-12">
            <Badge className="bg-yellow-400 text-yellow-900 hover:bg-yellow-400 mb-6 text-lg px-6 py-2">
              <Gift className="h-5 w-5 mr-2" />
              OFFRE EXCEPTIONNELLE - LIMITÉE DANS LE TEMPS
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Vous voulez aller plus loin ?
              <br />
              <span className="text-yellow-300">
                Découvrez l'origine de vos cystites !
              </span>
            </h2>

            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
              Obtenez un <strong>diagnostic personnalisé GRATUIT</strong> + un
              guide sur-mesure réalisé par <strong>7 experts</strong> pour en
              finir définitivement avec les infections à répétition.
            </p>

            {/* Compteur de temps */}
            <motion.div
              className="bg-red-600 text-white rounded-lg p-6 max-w-md mx-auto mb-8"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Timer className="h-6 w-6" />
                <span className="text-lg font-semibold">Offre limitée !</span>
              </div>
              <div className="text-3xl font-bold">{formatTime(timeLeft)}</div>
              <div className="text-sm opacity-90">Cette offre expire dans</div>
            </motion.div>
          </AnimatedSection>

          {/* Comparaison des prix */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center space-x-8 mb-6">
                <div className="text-center">
                  <div className="text-2xl line-through opacity-60">24,99€</div>
                  <div className="text-sm opacity-80">Prix normal</div>
                </div>
                <ArrowRight className="h-8 w-8 text-yellow-300" />
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300">
                    4,99€
                  </div>
                  <div className="text-sm opacity-80">
                    Aujourd'hui seulement
                  </div>
                </div>
              </div>
              <Link
                href="https://cystite.csb-klinik.lu/"
                className="bg-yellow-400 text-yellow-900 rounded-full px-6 py-2 inline-block font-bold"
              >
                ÉCONOMISEZ 80% - 20€ DE RÉDUCTION !
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que vous obtenez */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Voici ce que vous obtenez pour seulement 4,99€
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement complet et personnalisé pour en finir
              définitivement avec vos cystites récurrentes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Diagnostic gratuit */}
            <AnimatedCard delay={0.1}>
              <Card className="border-2 border-green-200 shadow-xl h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-green-100 text-green-800 mb-2">
                    GRATUIT - Valeur 49€
                  </Badge>
                  <CardTitle className="text-2xl text-green-700">
                    Diagnostic Personnalisé
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Questionnaire médical approfondi (50 questions)
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Analyse de vos habitudes de vie</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Identification des facteurs déclenchants</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Rapport détaillé sous 24h</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>

            {/* Guide personnalisé */}
            <AnimatedCard delay={0.2}>
              <Card className="border-2 border-purple-200 shadow-xl h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 mb-2">
                    Guide Premium
                  </Badge>
                  <CardTitle className="text-2xl text-purple-700">
                    Guide Sur-Mesure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>
                        Plan d'action personnalisé basé sur votre profil
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Protocole de traitement naturel adapté</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Recommandations alimentaires spécifiques</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Suivi et ajustements inclus</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Les 7 experts */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
              <Award className="h-4 w-4 mr-2" />
              Équipe Renforcée
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Maintenant 7 experts à votre service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe pluridisciplinaire encore plus complète pour une
              approche holistique de votre santé.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              {
                icon: Stethoscope,
                title: "Médecin Généraliste",
                color: "bg-blue-500",
              },
              { icon: Microscope, title: "Urologue", color: "bg-indigo-500" },
              { icon: Heart, title: "Gynécologue", color: "bg-pink-500" },
              { icon: Apple, title: "Nutritionniste", color: "bg-green-500" },
              { icon: Leaf, title: "Naturopathe", color: "bg-emerald-500" },
              { icon: Brain, title: "Psychologue", color: "bg-purple-500" },
              {
                icon: Zap,
                title: "Micronutritionniste",
                color: "bg-orange-500",
              },
            ].map((expert, index) => (
              <AnimatedCard key={index} index={index} delay={0.1}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-4 text-center">
                    <motion.div
                      className={`${expert.color} w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.5 },
                      }}
                    >
                      <expert.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {expert.title}
                    </h3>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages de réussite */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection direction="up" className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              Résultats Prouvés
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <AnimatedCounter
                from={0}
                to={94}
                duration={2}
                suffix="%"
                className="text-pink-600 font-bold"
              />{" "}
              de nos patientes n'ont plus de cystites récurrentes
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Claire D.",
                age: "29 ans",
                text: "Après le diagnostic personnalisé, j'ai enfin compris pourquoi j'avais des cystites à répétition. Le protocole sur-mesure a tout changé !",
                rating: 5,
                result: "0 cystite depuis 8 mois",
              },
              {
                name: "Amélie R.",
                age: "35 ans",
                text: "Le guide personnalisé m'a donné des solutions que je n'avais jamais essayées. Résultat : plus aucune infection depuis 6 mois !",
                rating: 5,
                result: "Guérison complète",
              },
              {
                name: "Sarah M.",
                age: "42 ans",
                text: "L'approche des 7 experts est révolutionnaire. Ils ont identifié la cause racine que personne n'avait vue avant.",
                rating: 5,
                result: "Vie transformée",
              },
            ].map((testimonial, index) => (
              <AnimatedCard key={index} index={index} delay={0.3}>
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium mb-4 inline-block">
                      ✅ {testimonial.result}
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mr-3">
                        <UserCheck className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.age}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Prêt(e) à en finir définitivement avec vos cystites ?
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Diagnostic gratuit + Guide personnalisé = Solution complète pour
              seulement 4,99€
            </motion.p>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://cystite.csb-klinik.lu/"
                  className="bg-yellow-400  rounded-md flex w-fit mx-auto hover:bg-yellow-500 text-yellow-900 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <Sparkles className="h-6 w-6 mr-3" />
                  OUI, JE VEUX MON DIAGNOSTIC PERSONNALISÉ
                  <ArrowRight className="h-6 w-6 ml-3" />
                </Link>
              </motion.div>

              <div className="flex items-center justify-center space-x-6 text-sm opacity-90">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Paiement sécurisé</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Résultats sous 24h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Satisfait ou remboursé</span>
                </div>
              </div>

              <p className="text-sm opacity-75">
                ⚠️ Cette offre expire dans {formatTime(timeLeft)} - Ne la
                laissez pas passer !
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-lg p-3">
              <Image
                src={logo}
                alt="CSB Klinik"
                className="h-12 w-auto"
                width={100}
                height={100}
              />
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 CSB Klinik - Tous droits réservés • Conseils rédigés par des
            professionnels de santé qualifiés
          </p>
        </div>
      </footer>
    </div>
  );
}
