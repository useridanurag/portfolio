import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const sendMessage = () => {
    let message = "Hello Anurag ";
    let phoneNumber = "7876082730";
    let url = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
    window.open(url);
  }

  return <div 
   class="fixed inset-x-0 bottom-0 text-[2.6rem] text-green-600 flex justify-end">
    <button onClick={sendMessage}>
      <FaWhatsapp className="bg-white p-1 m-2 rounded-md animate-pulse hover:animate-none" />
    </button>

  </div>


};

export default Whatsapp;
