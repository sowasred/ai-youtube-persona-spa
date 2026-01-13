export interface Creator {
  id: number;
  name: string;
  designation: string;
  image: string;
  telegramLink: string;
  whatsappLink: string;
  youtubeLink: string;
}

export const creators: Creator[] = [
  {
    id: 1,
    name: "Andrew Huberman",
    designation: "Neuroscientist",
    image: "/andrew_huberman_pic.jpg",
    telegramLink: "https://t.me/andrew_huberman_chatbot",
    whatsappLink: "https://wa.me/447876624276",
    youtubeLink: "https://www.youtube.com/@hubermanlab",
  },
  {
    id: 2,
    name: "Casey Zander",
    designation: "Dating Coach Youtuber",
    image: "/casey_zander_pic.jpg",
    telegramLink: "https://t.me/casey_zander_bot",
    whatsappLink: "",
    youtubeLink: "https://www.youtube.com/@CaseyZander",
  },
  {
    id: 3,
    name: "Sadia Khan",
    designation: "Psychologist",
    image: "/sadia2.png",
    telegramLink: "https://t.me/sadia_khan_chatbot",
    whatsappLink: "",
    youtubeLink: "https://www.youtube.com/@sadiapsychology",
  },
  {
    id: 4,
    name: "Jordan B. Peterson",
    designation: "Psychoanalyst",
    image: "/jordan_peterson_pic.jpg",
    telegramLink: "https://t.me/jordan_peterson_chat_bot",
    whatsappLink: "",
    youtubeLink: "https://www.youtube.com/@JordanBPeterson",
  },
  {
    id: 5,
    name: "Healthy Gamer GG",
    designation: "Psychologist",
    image: "/healthygamergg_pic.jpg",
    telegramLink: "https://t.me/Healthy_GamerGG_bot",
    whatsappLink: "",
    youtubeLink: "https://www.youtube.com/c/HealthyGamerGG",
  },
];
