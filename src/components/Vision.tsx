import Image from "next/image";

export default function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden py-24 md:py-36">
      <Image
        src="/images/works/misty-resort-canal.jpg"
        alt="淡い霧と水面反射のある未来都市"
        fill
        sizes="100vw"
        className="object-cover opacity-[0.32]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,21,0.92)_0%,rgba(5,7,21,0.56)_46%,rgba(5,7,21,0.94)_100%)]" />
      <div className="mist-band bottom-0" />

      <div className="section-shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-kicker mb-5">VISION</p>
          <h2 className="mb-10 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            まだ見たことのない世界観を、<span className="text-gradient">伝わるデザイン</span>へ。
          </h2>

          <div className="mx-auto max-w-3xl space-y-6 text-base leading-8 text-mist-gray md:text-lg md:leading-9">
            <p>AIによって、誰もがビジュアルを作れる時代になりました。</p>
            <p>
              だからこそ大切なのは、何を作るか、なぜその表現にするのか、どう届けるかだと考えています。
            </p>
            <p>
              SHOTA WORLDでは、AIの力を使いながら、人の想像力や感情に残るビジュアル表現を追求していきます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
