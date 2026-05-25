export type Work = {
  id: string;
  title: string;
  category: string;
  filter: "AI ART" | "POSTER" | "SNS" | "CONCEPT";
  image: string;
  useCase: string;
  theme: string;
  description: string;
  scope: string;
  tools: string[];
};

export const works: Work[] = [
  {
    id: "neon-city-escape",
    title: "NEON CITY ESCAPE",
    category: "AI ART / CONCEPT VISUAL",
    filter: "AI ART",
    image: "/images/works/neon-city-escape.jpg",
    useCase: "Music Jacket / Event Visual / SNS Ad",
    theme: "霧の未来都市と淡いネオンを組み合わせたシンセウェーブ表現",
    description: "高層ビル、パームツリー、水面反射を重ね、夢の中のリゾート都市のような余韻を設計したビジュアルです。",
    scope: "Prompt Design / Color Direction / Retouch",
    tools: ["Image Generation AI", "Photoshop", "Prompt Design"],
  },
  {
    id: "dream-tower-oasis",
    title: "DREAM TOWER OASIS",
    category: "AI ART / POSTER VISUAL",
    filter: "POSTER",
    image: "/images/works/dream-tower-oasis.jpg",
    useCase: "Poster / LP Main Visual / Brand Visual",
    theme: "高層ビル群と幻想的な色彩で、非日常感を演出したポスタービジュアル",
    description: "淡いピンクとシアンのグラデーションで、広告やLPのファーストビューにも使える印象的な世界観に仕上げています。",
    scope: "Concept Design / Visual Direction / Layout Idea",
    tools: ["Image Generation AI", "Photoshop", "Color Direction"],
  },
  {
    id: "misty-resort-canal",
    title: "MISTY RESORT CANAL",
    category: "CONCEPT VISUAL / WORLD DESIGN",
    filter: "CONCEPT",
    image: "/images/works/misty-resort-canal.jpg",
    useCase: "Brand Mood / Campaign Visual / Concept Art",
    theme: "都市とリゾートの境界を曖昧にするミスト感のある世界観",
    description: "水路の奥へ視線が流れる構図で、架空都市へ入っていく導入ビジュアルとして機能する一枚です。",
    scope: "World Design / Prompt Design / Retouch",
    tools: ["Image Generation AI", "Visual Direction", "Photoshop"],
  },
  {
    id: "lavender-skyline",
    title: "LAVENDER SKYLINE",
    category: "AI ART / KEY VISUAL",
    filter: "AI ART",
    image: "/images/works/lavender-skyline.jpg",
    useCase: "Key Visual / Poster / SNS Cover",
    theme: "ラベンダーの空とガラスビルの光で作る静かな未来感",
    description: "強いサイバーパンクではなく、透明感とノスタルジーを優先したキービジュアルの方向性です。",
    scope: "Prompt Design / Color Direction",
    tools: ["Image Generation AI", "Prompt Design", "Color Direction"],
  },
  {
    id: "cyan-afterglow-city",
    title: "CYAN AFTERGLOW CITY",
    category: "SNS / AD CREATIVE",
    filter: "SNS",
    image: "/images/works/cyan-afterglow-city.jpg",
    useCase: "SNS Post / Banner Ad / LP Visual",
    theme: "シアンの余韻とパステルピンクで目を止める広告向けビジュアル",
    description: "SNSフィードの中でも視線を止める色面と、ブランドの印象を残す静かな奥行きを意識しています。",
    scope: "SNS Creative / Crop Direction / Color Direction",
    tools: ["Image Generation AI", "Photoshop", "SNS Creative"],
  },
  {
    id: "pastel-future-gate",
    title: "PASTEL FUTURE GATE",
    category: "POSTER / KEY VISUAL",
    filter: "POSTER",
    image: "/images/works/pastel-future-gate.jpg",
    useCase: "Event Poster / Music Visual / Landing Page",
    theme: "水面反射を入り口にした、淡い未来都市のメインビジュアル",
    description: "イベントや音楽作品の告知に使いやすい、余白と中心性のある構図を意識して制作しています。",
    scope: "Concept Design / Poster Direction / Retouch",
    tools: ["Image Generation AI", "Photoshop", "Layout Design"],
  },
  {
    id: "sunset-rooftop-coffee",
    title: "SUNSET ROOFTOP COFFEE",
    category: "KEY VISUAL / STORY VISUAL",
    filter: "CONCEPT",
    image: "/images/works/sunset-rooftop-coffee.jpg",
    useCase: "Ad / SNS Post / Campaign Visual",
    theme: "都市の喧騒と個人の静かな時間を対比させた映画的なビジュアル",
    description: "夕暮れの光とガラス反射を使い、商品やサービスの背景にストーリーを感じさせる表現を狙っています。",
    scope: "Story Visual / Retouch / Tone Design",
    tools: ["Image Generation AI", "Photoshop", "Visual Direction"],
  },
  {
    id: "quiet-future-room",
    title: "QUIET FUTURE ROOM",
    category: "AI ART / INTERIOR CONCEPT",
    filter: "AI ART",
    image: "/images/works/quiet-future-room.jpg",
    useCase: "Brand Visual / LP / Thumbnail",
    theme: "静寂とテクノロジーが共存する夜のインテリアコンセプト",
    description: "人物の気配と都市の光を同居させ、サービス紹介やYouTubeサムネイルにも展開できるムードを作りました。",
    scope: "Prompt Design / Scene Direction / Retouch",
    tools: ["Image Generation AI", "Photoshop", "Visual Direction"],
  },
  {
    id: "morning-window-study",
    title: "MORNING WINDOW STUDY",
    category: "CONCEPT VISUAL / BRAND MOOD",
    filter: "CONCEPT",
    image: "/images/works/morning-window-study.jpg",
    useCase: "Brand Mood / SNS Series / LP Visual",
    theme: "夜明け前の都市と室内の静けさをつなぐコンセプトビジュアル",
    description: "派手さよりも空気感を優先し、ブランドの世界観をシリーズ化しやすいトーンへまとめています。",
    scope: "Visual Direction / Color Direction / Retouch",
    tools: ["Image Generation AI", "Photoshop", "Color Direction"],
  },
];
