type ModalProps = {
  item: {
    name: string,
    whatsappLink: string,
    telegramLink: string
  },
  onClickHandler: React.MouseEventHandler<HTMLDivElement>
}

export default function Modal({item, onClickHandler}: ModalProps) {
  return (
    <div
    onClick={onClickHandler}
    className="z-10 h-screen w-screen fixed bg-gray-900/10 top-0 left-0 pt-100"
  >
    <div className="p-8 rounded-lg bg-white mx-auto w-120">
      <h3 className="text-2xl text-center font-light text-gray-800 mb-6">
        Start chatting with {item.name}
      </h3>
      <div className="flex flex-col gap-4 w-full mx-auto">
        <a href={item.whatsappLink} target="_blank">
          <button className="px-8 py-4 rounded-full text-lg font-medium bg-green-500 text-white w-full">
            Chat on WhatsApp
          </button>
        </a>
        <a href={item.whatsappLink} target="_blank">
          <button className="px-8 py-4 rounded-full text-lg font-medium bg-blue-500 text-white w-full">
            Chat on Telegram
          </button>
        </a>
      </div>
    </div>
  </div>
  )
}