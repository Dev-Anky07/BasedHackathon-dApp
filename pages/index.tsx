import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

// Progress Bar Component
function ProgressBar({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

// Get Started Component
function GetStarted({ onStart }: { onStart: () => void }) {
  const handleConnectWallet = () => {
    console.log('Connecting wallet...')
  }

  return (
    <div className="min-h-screen bg-white text-blue-600">
      <header className="p-4 flex justify-end">
        <Button onClick={handleConnectWallet} className="bg-cyan-500 hover:bg-cyan-600 text-white">
          Connect Wallet
        </Button>
      </header>
      <main className="flex flex-col items-center justify-center h-[calc(100vh-80px)]">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Platform</h1>
        <Button onClick={onStart} className="bg-blue-600 hover:bg-blue-700 text-white text-xl py-6 px-12">
          Get Started
        </Button>
      </main>
    </div>
  )
}

// Language Selection Component
function LanguageSelection({ onNext }: { onNext: (selectedLanguages: string[]) => void }) {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const languages = [
    'English', 'Mandarin', 'Hindi', 'Spanish', 'French',
    'Arabic', 'Bengali', 'Russian', 'Portuguese', 'Indonesian',
    'Urdu', 'German', 'Japanese', 'Swahili', 'Marathi',
    'Telugu', 'Turkish', 'Tamil', 'Yoruba', 'Vietnamese'
  ]

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages(prev => 
      prev.includes(lang) 
        ? prev.filter(l => l !== lang)
        : prev.length < 4 ? [...prev, lang] : prev
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Select up to 4 languages</h2>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {languages.map(lang => (
          <Button
            key={lang}
            onClick={() => toggleLanguage(lang)}
            className={`${
              selectedLanguages.includes(lang) 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-blue-600 border border-blue-600'
            }`}
          >
            {lang}
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p>{selectedLanguages.length} selected out of 4</p>
        <Button 
          onClick={() => onNext(selectedLanguages)}
          disabled={selectedLanguages.length === 0}
          className="bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

// Community Selection Component
function CommunitySelection({ onNext }: { onNext: (selectedCommunities: string[]) => void }) {
  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([])
  const communities = [
    'Community 1', 'Community 2', 'Community 3', 'Community 4',
    'Community 5', 'Community 6', 'Community 7', 'Community 8',
    'Community 9', 'Community 10', 'Community 11', 'Community 12'
  ]

  const toggleCommunity = (community: string) => {
    setSelectedCommunities(prev => 
      prev.includes(community) 
        ? prev.filter(c => c !== community)
        : [...prev, community]
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Select communities to follow</h2>
      <div className="grid grid-cols-4 gap-4 mb-6">
        {communities.map((community, index) => (
          <Button
            key={community}
            onClick={() => toggleCommunity(community)}
            className={`aspect-square ${
              
              selectedCommunities.includes(community) 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-blue-600 border border-blue-600'
            } ${index >= 4 && index < 8 ? 'translate-x-1/2' : ''}`}
          >
            {community}
          </Button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p>{selectedCommunities.length} communities selected</p>
        <Button 
          onClick={() => onNext(selectedCommunities)}
          disabled={selectedCommunities.length === 0}
          className="bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

// Creator Selection Component
const creators = [
  { name: 'Creator 1', image: 'https://v0.dev/public.blob.vercel-storage.com/creator1-Hy1Hy1-1686924433.jpg' },
  { name: 'Creator 2', image: 'https://v0.dev/public.blob.vercel-storage.com/creator2-Hy1Hy1-1686924433.jpg' },
  { name: 'Creator 3', image: 'https://v0.dev/public.blob.vercel-storage.com/creator3-Hy1Hy1-1686924433.jpg' },
  { name: 'Creator 4', image: 'https://v0.dev/public.blob.vercel-storage.com/creator4-Hy1Hy1-1686924433.jpg' },
  { name: 'Creator 5', image: 'https://v0.dev/public.blob.vercel-storage.com/creator5-Hy1Hy1-1686924433.jpg' },
  { name: 'Creator 6', image: 'https://v0.dev/public.blob.vercel-storage.com/creator6-Hy1Hy1-1686924433.jpg' },
  { name: 'Creator 7', image: 'https://v0.dev/public.blob.vercel-storage.com/creator7-Hy1Hy1-1686924433.jpg' },
  { name: 'Creator 8', image: 'https://v0.dev/public.blob.vercel-storage.com/creator8-Hy1Hy1-1686924433.jpg' },
  { name: 'Creator 9', image: 'https://v0.dev/public.blob.vercel-storage.com/creator9-Hy1Hy1-1686924433.jpg' },
  { name: 'Creator 10', image: 'https://v0.dev/public.blob.vercel-storage.com/creator10-Hy1Hy1-1686924433.jpg' },
]

function CreatorSelection({ onFinish }: { onFinish: (selectedCreators: string[]) => void }) {
  const [selectedCreators, setSelectedCreators] = useState<string[]>([])
  const [startIndex, setStartIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const toggleCreator = (creator: string) => {
    setSelectedCreators(prev => 
      prev.includes(creator) 
        ? prev.filter(c => c !== creator)
        : prev.length < 5 ? [...prev, creator] : prev
    )
  }

  const nextCreators = () => {
    setStartIndex(prev => Math.min(prev + 4, creators.length - 4))
  }

  const prevCreators = () => {
    setStartIndex(prev => Math.max(prev - 4, 0))
  }

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = 'transform 0.5s ease-in-out'
      carouselRef.current.style.transform = `translateX(-${startIndex * 25}%)`
    }
  }, [startIndex])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Select up to 5 favorite creators</h2>
      <div className="relative mb-6">
        <Button 
          onClick={prevCreators} 
          disabled={startIndex === 0} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-10 h-10 p-0"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div className="overflow-hidden">
          <div ref={carouselRef} className="flex transition-transform duration-500 ease-in-out">
            {creators.map((creator, index) => (
              <div key={creator.name} className="w-1/4 flex-shrink-0 px-2">
                <Button
                  onClick={() => toggleCreator(creator.name)}
                  className={`w-full h-72 p-0 flex flex-col rounded-lg overflow-hidden ${
                    selectedCreators.includes(creator.name) 
                      ? 'ring-4 ring-blue-600' 
                      : 'ring-1 ring-gray-200'
                  }`}
                >
                  <div className="w-full h-5/6 relative">
                    <Image
                      src={creator.image}
                      alt={creator.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-full h-1/6 flex items-center justify-center bg-white text-blue-600">
                    {creator.name}
                  </div>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <Button 
          onClick={nextCreators} 
          disabled={startIndex >= creators.length - 4} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 rounded-full w-10 h-10 p-0"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex justify-between items-center">
        <p>{selectedCreators.length} selected out of 5</p>
        <Button 
          onClick={() => onFinish(selectedCreators)}
          disabled={selectedCreators.length === 0}
          className="bg-cyan-500 hover:bg-cyan-600 text-white"
        >
          Finish
        </Button>
      </div>
    </div>
  )
}

// Main Page Component
function MainPage() {
  return (
    <div className="min-h-screen bg-white text-blue-600 p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to the Main Page!</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Communities</h2>
          <ul className="list-disc list-inside">
            <li>Community 1</li>
            <li>Community 2</li>
            <li>Community 3</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Your Creators</h2>
          <ul className="list-disc list-inside">
            <li>Creator 1</li>
            <li>Creator 2</li>
            <li>Creator 3</li>
          </ul>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <ul className="list-disc list-inside">
            <li>New post from Creator 1</li>
            <li>Community 2 event tomorrow</li>
            <li>Creator 3 started a live stream</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// Onboarding Flow Component
export default function OnboardingFlow() {
  const [step, setStep] = useState(0)
  const [selections, setSelections] = useState({
    languages: [] as string[],
    communities: [] as string[],
    creators: [] as string[]
  })

  const handleStart = () => {
    setStep(1)
  }

  const handleLanguageSelection = (langs: string[]) => {
    setSelections(prev => ({ ...prev, languages: langs }))
    setStep(2)
  }

  const handleCommunitySelection = (communities: string[]) => {
    setSelections(prev => ({ ...prev, communities }))
    setStep(3)
  }

  const handleCreatorSelection = (creators: string[]) => {
    setSelections(prev => ({ ...prev, creators }))
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-white text-blue-600">
      {step > 0 && <ProgressBar currentStep={step} totalSteps={4} />}
      {step === 0 && <GetStarted onStart={handleStart} />}
      {step === 1 && <LanguageSelection onNext={handleLanguageSelection} />}
      {step === 2 && <CommunitySelection onNext={handleCommunitySelection} />}
      {step === 3 && <CreatorSelection onFinish={handleCreatorSelection} />}
      {step === 4 && <MainPage />}
    </div>
  )
}