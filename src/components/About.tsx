import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="studio-section studio-about">
      <div className="section-shell studio-about-layout">
        <div className="studio-about-portrait">
          <Image
            src="/images/profile/shota-artist-profile.jpg"
            alt="デザイナー 庭野翔太"
            fill
            sizes="(max-width: 900px) 92vw, 42vw"
            className="object-cover"
          />
          <div className="studio-about-name">
            <span>DESIGNER</span>
            <strong>庭野 翔太</strong>
            <small>SHOTA NIWANO</small>
          </div>
        </div>

        <div className="studio-about-copy">
          <p className="studio-eyebrow">ABOUT</p>
          <h2>
            話を聞き、整理して、
            <span>伝わる形をつくる人。</span>
          </h2>
          <div className="studio-about-lead">
            ホームページもチラシも、見た目を整えるだけでは終わりません。
            誰に、何を、どんな順番で伝えるかを考えることからデザインは始まります。
          </div>
          <div className="studio-about-body">
            <p>
              SHOTA WORLDでは、庭野翔太がご相談から制作まで担当します。
              お話の中から事業やサービスの魅力を見つけ、文章、写真、色、レイアウトを一つの世界観に整えます。
            </p>
            <p>
              「何を載せればいいかわからない」「イメージがまだ固まっていない」という段階でも、
              一緒に考えながら形にしていきます。
            </p>
          </div>
          <dl className="studio-about-facts">
            <div><dt>NAME</dt><dd>庭野 翔太</dd></div>
            <div><dt>ROLE</dt><dd>Web・グラフィックデザイナー</dd></div>
            <div><dt>WORK</dt><dd>ホームページ / チラシ / ビジュアル制作</dd></div>
          </dl>
          <a href="mailto:contact@shota-world.jp" className="studio-text-link focus-ring">
            庭野翔太に相談する
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
