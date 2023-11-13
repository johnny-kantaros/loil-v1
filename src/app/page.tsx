import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-10 relative w-full min-h-20">
        <Image
          src="/loil-cover.png"
          alt="Loil cover"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          width={1050}
          height={350}
        />
      </div>
      <div className="flex flex-row items-stretch mb-10">
        <div className="flex-1 basis-8/12 bg-sky-100 text-black text-lg leading-loose">
          <p className="mx-24 my-10">
            You care. A lot. And it shows – through your compassion, your
            dedication, and your loyal patients. But its a lot of work. Maybe
            you’re looking to grow... Maybe you’re looking to increase your
            referrals... Maybe you’re looking to deepen your relationship with
            your patients... But where is the time? And how to begin?
          </p>
          <p className="mx-24 my-10">Loïl can help...</p>
          <p className="mx-24 my-10">
            Loïl brings together talented experts in strategy,
            marketing/communications and design to grow and strengthen your
            patient and referring provider engagement. By understanding
            patients’ needs, we deliver personalized messaging to enhance
            patient communication, increase your revenue, and win trust and
            loyalty.
          </p>
          <p className="mx-24 my-10 text-loil-dark text-2xl">
            Loïl is your partner in sharing your story. We build on your mission
            to make meaningful connections, engage your patients and create
            lasting relationships.
          </p>
        </div>

        <div className="flex-1 basis-4/12 bg-blue-950 justify-center items-center p-32">
          <Image src="/eyes.png" alt="eyes for smile" width={110} height={55} />
          <p className="text-white text-3xl my-10 italic">
            Let us focus on your business so you can focus on patient care.
          </p>
          <Image src="/smile.png" alt="smile" width={200} height={100} />
        </div>
      </div>
    </div>
  );
}
