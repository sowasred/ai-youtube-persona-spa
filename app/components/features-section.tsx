import Feature from "./feature"
const data = [
  {
    isSoon: false,
    isLeft: true,
    title: "Trained on your data",
    subtitle: "Intelligently trained on the data you produced.",
    imgSrc: "/trained_on_your_data.jpg",
    lottieSrc: "/conversation_engine.json",
    alt: "brain image"
  },
  {
    isSoon: false,
    isLeft: false,
    title: "Get content advice",
    subtitle: "Get AI-powered suggestions based on conversation data.",
    imgSrc: "/get_content_advice.jpg",
    alt: "notification image"
  },
  {
    isSoon: true,
    isLeft: true,
    title: "Speaking for you",
    subtitle: "Fans can speak with you for real.",
    imgSrc: "/speaking_for_you.jpg",
    alt: "microphone image"
  },
]

export default function FeaturesSection() {
  return(
    <div className="flex gap-24 flex-col">
      {data.map((elem, i) => {
        return (
          <Feature
            key={i}
            isSoon={elem.isSoon}
            isLeft={elem.isLeft}
            title={elem.title}
            subtitle={elem.subtitle}
            imgSrc={elem.imgSrc}
            lottieSrc={elem.lottieSrc}
            imgAlt={elem.alt}
          />
        )
      })}
    </div>
  )
}
