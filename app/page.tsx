"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Fade } from "react-awesome-reveal";
import {
  Star,
  Users,
  Shield,
  Heart,
  Sun,
  Waves,
  Download,
  CheckCircle,
  Mail,
  User,
  Stethoscope,
  Leaf,
  Brain,
  Apple,
  Microscope,
  UserCheck,
  BookOpen,
  Award,
  Lock,
  Sparkles,
} from "lucide-react";
import { getCaptchaToken } from "@/lib/google/captcha";
import { formAction } from "./action";
import Image from "next/image";
import logo from "../public/images/Logo_sans_fond.png";
import cover from "../public/images/ebook-cover.jpg";
import { useRouter } from "next/navigation";
export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    newsletter: true,
    rgpd: false,
  });
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.rgpd) {
      alert("Veuillez accepter la politique de confidentialité");
      return;
    }

    try {
      const token = await getCaptchaToken();
      const res = await formAction(token);
      if (res?.success) {
        setIsSubmitting(true);
        // Simulation d'envoi
        const sendmail = await fetch("/api/sendmail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (sendmail?.status === 200) {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          if (response?.status === 200) {
            setIsSubmitted(true);
            setIsSubmitting(false);
            setErrMsg("");
            router.push("/remerciements");
          } else {
            setIsSubmitting(false);
            setErrMsg(
              "Une erreur est survenue, réessayez dans quelques minutes"
            );
          }
        } else {
          setIsSubmitting(false);
          setErrMsg("Une erreur est survenue, réessayez dans quelques minutes");
        }
      } else {
        setIsSubmitting(false);
        setErrMsg(res.message);
      }
    } catch (error) {
      setIsSubmitting(false);
      return error;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-rose-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Decorative Elements */}

        <div className="absolute top-10 right-10 opacity-20">
          <Fade direction="down">
            <Sun className="h-24 w-24 text-yellow-400 animate-pulse" />
          </Fade>
        </div>
        <div className="absolute bottom-0 left-0 right-0 opacity-30">
          <Fade direction="up">
            <Waves className="h-16 w-full text-blue-300" />
          </Fade>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <Fade direction="left" cascade>
              <div className="space-y-8">
                <div className="w-[100px] md:-mt-16 h-[100px] rounded-full bg-white p-2 relative">
                  <Image
                    src={logo}
                    fill
                    className="object-contain w-full h-full"
                    alt="Logo CSB Klinik"
                  />
                </div>
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Guide Gratuit - Été 2025
                  </Badge>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Profitez de vos{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">
                      vacances d'été
                    </span>{" "}
                    sans craindre les cystites
                  </h1>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    Découvrez les conseils d'experts pour prévenir et gérer les
                    infections urinaires pendant la période estivale. Un guide
                    complet rédigé par 6 professionnels de santé reconnus.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      Conseils de 6 experts
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      Téléchargement immédiat
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      100% gratuit
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      Conseils pratiques
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() =>
                      document
                        .getElementById("download-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Télécharger gratuitement
                  </Button>
                  <div className="flex items-center text-sm text-gray-500">
                    <Lock className="h-4 w-4 mr-2" />
                    Aucune carte bancaire requise
                  </div>
                </div>
              </div>
            </Fade>

            {/* Right Content - Book Preview */}
            <Fade direction="up" className="md:-mt-16">
              <div className="relative">
                <div className="relative mx-auto max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="aspect-[3/4] bg-gradient-to-br from-orange-100 to-pink-200 rounded-lg flex items-center justify-center">
                      <div className="w-full h-full relative z-10 rounded-xl overflow-hidden">
                        <Image
                          src={cover}
                          alt="Cover Guide l'été spécial cystite"
                          fill
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* <BookOpen className="h-20 w-20 text-pink-500" /> */}
                    </div>
                    <div className="mt-4 text-center">
                      <h3 className="font-bold text-gray-900">
                        Guide Anti-Cystite
                      </h3>
                      <p className="text-sm text-gray-600">Votre été serein</p>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Fade direction="up">
            <div className="text-center mb-16">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
                <Award className="h-4 w-4 mr-2" />
                Expertise Médicale
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Rédigé par 6 professionnels de santé
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un guide complet élaboré par une équipe pluridisciplinaire
                d'experts reconnus dans leur domaine.
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Fade cascade>
              {[
                {
                  icon: Stethoscope,
                  title: "Médecin Généraliste",
                  desc: "Approche globale et diagnostic des infections urinaires",
                  color: "bg-blue-500",
                },
                {
                  icon: Microscope,
                  title: "Urologue",
                  desc: "Spécialiste des voies urinaires et traitements avancés",
                  color: "bg-indigo-500",
                },
                {
                  icon: Heart,
                  title: "Gynécologue",
                  desc: "Expertise en santé féminine et prévention spécialisée",
                  color: "bg-pink-500",
                },
                {
                  icon: Apple,
                  title: "Nutritionniste",
                  desc: "Conseils alimentaires et hydratation optimale",
                  color: "bg-green-500",
                },
                {
                  icon: Leaf,
                  title: "Naturopathe",
                  desc: "Solutions naturelles et approche holistique",
                  color: "bg-emerald-500",
                },
                {
                  icon: Brain,
                  title: "Psychologue",
                  desc: "Gestion du stress et impact psychologique",
                  color: "bg-purple-500",
                },
              ].map((expert, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`${expert.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <expert.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{expert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {expert.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </Fade>
          </div>
        </div>
      </section>

      {/* Content Preview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <Fade direction="up">
            <div className="text-center mb-16">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
                <BookOpen className="h-4 w-4 mr-2" />
                Contenu du Guide
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ce que vous allez découvrir
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un guide pratique avec des conseils concrets pour profiter
                pleinement de votre été.
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Fade cascade>
              {[
                {
                  icon: "🏖️",
                  title: "Prévention en vacances",
                  desc: "Tous les réflexes à adopter à la plage, piscine et en voyage",
                },
                {
                  icon: "💧",
                  title: "Hydratation optimale",
                  desc: "Quand, comment et combien boire pendant les fortes chaleurs",
                },
                {
                  icon: "🩱",
                  title: "Hygiène intime",
                  desc: "Les bonnes pratiques adaptées aux activités estivales",
                },
                {
                  icon: "🌿",
                  title: "Remèdes naturels",
                  desc: "Solutions naturelles efficaces et sans effets secondaires",
                },
                {
                  icon: "🚨",
                  title: "Gestion des crises",
                  desc: "Que faire en cas de symptômes pendant vos vacances",
                },
                {
                  icon: "✅",
                  title: "Check-list vacances",
                  desc: "Votre trousse de secours anti-cystite à emporter",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </Fade>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <Fade direction="up">
            <div className="text-center mb-16">
              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 mb-4">
                <Users className="h-4 w-4 mr-2" />
                Témoignages
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Déjà plus de 10 000 femmes conquises
              </h2>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Fade direction="up" cascade>
              {[
                {
                  name: "Sophie M.",
                  age: "32 ans",
                  text: "Grâce à ce guide, j'ai passé mes vacances en Grèce sans aucun problème ! Les conseils sont très pratiques.",
                  rating: 5,
                },
                {
                  name: "Marie L.",
                  age: "28 ans",
                  text: "Enfin un guide complet ! J'ai appliqué tous les conseils et ça marche vraiment. Je le recommande vivement.",
                  rating: 5,
                },
                {
                  name: "Camille R.",
                  age: "35 ans",
                  text: "Les remèdes naturels proposés sont excellents. Ma naturopathe m'a confirmé que c'était du solide !",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
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
              ))}
            </Fade>
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section
        id="download-form"
        className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50"
      >
        <Fade triggerOnce>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {!isSubmitted ? (
                <Card className="border-0 shadow-2xl">
                  <CardHeader className="text-center pb-8">
                    <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 mx-auto mb-4">
                      <Download className="h-4 w-4 mr-2" />
                      Téléchargement Gratuit
                    </Badge>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                      Recevez votre guide gratuitement
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                      Saisissez vos informations ci-dessous pour recevoir
                      immédiatement votre guide par email
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="firstName"
                            className="text-sm font-medium text-gray-700 flex items-center"
                          >
                            <User className="h-4 w-4 mr-2" />
                            Prénom *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                            placeholder="Votre prénom"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700 flex items-center"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="newsletter"
                            checked={formData.newsletter}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange(
                                "newsletter",
                                checked as boolean
                              )
                            }
                            className="mt-1"
                          />
                          <label
                            htmlFor="newsletter"
                            className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                          >
                            Je souhaite recevoir des conseils santé et bien-être
                            par email (optionnel)
                          </label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="rgpd"
                            checked={formData.rgpd}
                            onCheckedChange={(checked) =>
                              handleCheckboxChange("rgpd", checked as boolean)
                            }
                            className="mt-1"
                          />
                          <label
                            htmlFor="rgpd"
                            className="text-sm text-gray-700 leading-relaxed cursor-pointer"
                          >
                            J'accepte la{" "}
                            <a
                              href="#"
                              className="text-pink-600 hover:underline"
                            >
                              politique de confidentialité
                            </a>{" "}
                            et le traitement de mes données personnelles *
                            (RGPD)
                          </label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting || !formData.rgpd}
                        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Download className="h-5 w-5 mr-2" />
                            Télécharger gratuitement
                          </>
                        )}
                      </Button>
                      {errMsg && <p className="text-red-500">{errMsg}</p>}
                      <div className="flex items-center justify-center text-sm text-gray-500">
                        <Shield className="h-4 w-4 mr-2" />
                        Vos données sont sécurisées • Pas de spam •
                        Désinscription en 1 clic
                      </div>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-2xl">
                  <CardContent className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Merci {formData.firstName} ! 🎉
                    </h3>
                    <p className="text-lg text-gray-600 mb-2">
                      Votre guide a été envoyé à{" "}
                      <strong>{formData.email}</strong>
                    </p>
                    <p className="text-gray-600">
                      Vérifiez votre boîte de réception (et vos spams) dans les
                      prochaines minutes.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </Fade>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <p className="text-lg font-semibold">
              Guide Anti-Cystite - Votre Été Serein
            </p>
            <p className="text-gray-400">
              © 2025 - Tous droits réservés • Conseils rédigés par des
              professionnels de santé qualifiés
            </p>
            <p className="text-sm text-gray-500">
              Les informations fournies sont à titre éducatif. Consultez votre
              médecin pour un diagnostic personnalisé.
            </p>
            <p>
              Ce site est protégé par reCAPTCHA et la
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener"
              >
                Politique de confidentialité
              </a>{" "}
              ainsi que les{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener"
              >
                Conditions d’utilisation
              </a>
              de Google s’appliquent.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
