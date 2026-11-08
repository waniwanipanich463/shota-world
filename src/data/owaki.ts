const base = "/images/works/owaki";
const mockupSize = { width: 1122, height: 1402 };
const backSize = { width: 1738, height: 2047 };
const frontSize = { width: 1183, height: 1182 };

export const owakiImages = {
  backColorMockup: {
    ...mockupSize,
    src: `${base}/owaki_mockup_back_3color_DTF_v01(2).png`,
    alt: "居酒屋おおわきのTシャツ、背面・3色DTF版のモックアップ",
    caption: "3色DTF版 / 背面",
  },
  frontColorMockup: {
    ...mockupSize,
    src: `${base}/owaki_mockup_front_right_3color_DTF_v01(2).png`,
    alt: "居酒屋おおわきのTシャツ、前面右胸・3色DTF版のモックアップ",
    caption: "3色DTF版 / 前面右胸",
  },
  backColorDesign: {
    ...backSize,
    src: `${base}/owaki_design_back_3color_v01(2).png`,
    alt: "居酒屋おおわきのTシャツ、背面・3色DTF版のデザイン原画",
    caption: "3色DTF版 / 背面原画",
  },
  backWhiteDesign: {
    ...backSize,
    src: `${base}/owaki_design_back_white1_v01(2).png`,
    alt: "居酒屋おおわきのTシャツ、背面・白1色版のデザイン原画",
    caption: "白1色版 / 背面原画",
  },
  frontColorDesign: {
    ...frontSize,
    src: `${base}/owaki_design_front_3color_v01(2).png`,
    alt: "居酒屋おおわきのTシャツ、前面右胸・3色DTF版のデザイン原画",
    caption: "3色DTF版 / 前面右胸原画",
  },
  frontWhiteDesign: {
    ...frontSize,
    src: `${base}/owaki_design_front_white1_v01(2).png`,
    alt: "居酒屋おおわきのTシャツ、前面右胸・白1色版のデザイン原画",
    caption: "白1色版 / 前面右胸原画",
  },
  backWhiteMockup: {
    ...mockupSize,
    src: `${base}/owaki_mockup_back_white1_v01(2).png`,
    alt: "居酒屋おおわきのTシャツ、背面・白1色版のモックアップ",
    caption: "白1色版 / 背面",
  },
  frontWhiteMockup: {
    ...mockupSize,
    src: `${base}/owaki_mockup_front_right_white1_v01(2).png`,
    alt: "居酒屋おおわきのTシャツ、前面右胸・白1色版のモックアップ",
    caption: "白1色版 / 前面右胸",
  },
};
