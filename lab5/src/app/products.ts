export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  img2: string;
  img3?: string;
  url: string;
  rating: number;
  likes: number;
  category: string;
}

export const products = [
  {
    category: 'Perfumes',
    likes: 0,
    id: 1,
    name: 'Antonio Banderas Blue Seduction',
    price: 150,
    description: 'A fragrance for men',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h45/63374187790366/antonio-banderas-blue-seduction-edt-100-ml-17300817-1-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/hce/63374188019742/antonio-banderas-blue-seduction-edt-100-ml-17300817-2-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h97/47805947838494/antonio-banderas-blue-seduction-edt-100-ml-17300817-5-Container.jpg",
    url: "https://kaspi.kz/shop/p/antonio-banderas-blue-seduction-tualetnaja-voda-edt-100-ml-17300817/?c=750000000#!/item",
    rating: 5
  },
  {
    category: 'Perfumes',
    likes: 0,
    id: 2,
    name: 'Tiziana Terenzi Kirke',
    price: 199,
    description: 'A great fragrance for summer',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/hcc/31817539747870/tiziana-terenzi-kirke-edp-100-ml-17301541-1.jpg", 
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h72/h24/31817541320734/tiziana-terenzi-kirke-edp-100-ml-17301541-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h80/h12/31817542762526/tiziana-terenzi-kirke-edp-100-ml-17301541-3.jpg",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/",
    rating: 4
  },
  {
    category: 'Perfumes',
    likes: 0,
    id: 3,
    name: "GIVENCHY L'Interdit Rouge",
    price: 210,
    description: 'The best cherry fragrance', 
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h99/hd3/46406419546142/givenchy-l-interdit-rouge-edp-2021-50-ml-102521378-1.jpg",
    url: "https://kaspi.kz/shop/p/givenchy-l-interdit-rouge-2021-parfjumernaja-voda-edp-50-ml-102521378/?c=750000000#!/item",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcd/hd2/52334525841438/givenchy-l-interdit-rouge-2021-parfumernaa-voda-edp-50-ml-102521378-2.jpg",
    rating: 3
  },
  {
    category: 'Perfumes',
    likes: 0,
    id: 4,
    name: 'CHANEL Coco Mademoiselle',
    price: 115,
    description: 'Very sweet fragrance',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf7/hf9/32200516534302/chanel-coco-mademoiselle-edp-35-ml-17303003-1.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/hed/32200517648414/chanel-coco-mademoiselle-edp-35-ml-17303003-2.jpg",
    img3 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc5/h3b/32200519680030/chanel-coco-mademoiselle-edp-35-ml-17303003-3.jpg",
    url :"https://kaspi.kz/shop/p/chanel-coco-mademoiselle-parfjumernaja-voda-edp-35-ml-17303003/?c=750000000#!/item",
    rating: 5,
  },
  {
    category: 'Perfumes',
    likes: 0,
    id: 6,
    name: 'Carolina Herrera Good Girl',
    price: 120,
    description: 'The best fragrance',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcf/h1e/31551783174174/carolina-herrera-good-girl-edp-50-ml-17300672-1-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h31/31551787630622/carolina-herrera-good-girl-edp-50-ml-17300672-2-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbb/hf0/31551792218142/carolina-herrera-good-girl-edp-50-ml-17300672-3-Container.jpg",
    url: "https://kaspi.kz/shop/p/carolina-herrera-good-girl-parfjumernaja-voda-edp-50-ml-17300672/?c=750000000#!/item",
    rating: 5
  },
  {
    category: 'Care cosmetics',
    likes: 0,
    id: 5,
    name: 'The Ordinary Niacinamide',
    price: 799,
    description: 'The best acid for skin',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h63/h05/33287281410078/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-1.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hec/h15/33287286980638/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/haf/33287293042718/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687-3.jpg",
    url: "https://kaspi.kz/shop/p/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687/",
    rating: 5
  },
  {
    category: 'Care cosmetics',
    likes: 0,
    id: 7,
    name: 'Cooling Sun SPF50',
    price: 499,
    description: 'Very good SPF for summer time',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h62/68670974197790/deoproce-hyaluronic-cooling-sun-gel-spf-50-pa-gel-50-ml-100267131-1.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h62/68670974197790/deoproce-hyaluronic-cooling-sun-gel-spf-50-pa-gel-50-ml-100267131-1.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h62/68670974197790/deoproce-hyaluronic-cooling-sun-gel-spf-50-pa-gel-50-ml-100267131-1.jpg",
    url: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/",
    rating: 4
  },
  {
    category: 'Care cosmetics',
    likes: 0,
    id: 8,
    name: 'Kombucha Tea крем-гель',
    price: 30,
    description: 'Good cream for you',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h48/51068503293982/dr-ceuracle-vegan-kombucha-tea-gel-cream-75-ml-102019813-1-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h34/h8a/51068503490590/dr-ceuracle-vegan-kombucha-tea-gel-cream-75-ml-102019813-2-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb0/hd6/51068503719966/dr-ceuracle-vegan-kombucha-tea-gel-cream-75-ml-102019813-3-Container.jpg",
    url: "https://kaspi.kz/shop/p/control-ultimate-edition-ps5-101266342/",
    rating: 1
  },
  {
    category: 'Care cosmetics',
    likes: 0,
    id: 10,
    name: 'NIVEA Care',
    price: 5,
    description: 'Cream for your skin',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h8d/31545731579934/nivea-care-uvlaznausij-100-ml-17600531-1-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h8d/31545731579934/nivea-care-uvlaznausij-100-ml-17600531-1-Container.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h8d/31545731579934/nivea-care-uvlaznausij-100-ml-17600531-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/nivea-care-uvlazhnjajuschii-krem-100-ml-17600531/",
    rating: 0
  },
  {
    category: 'Care cosmetics',
    likes: 0,
    id: 11,
    name: 'Dr. Jart Ctrl-A Teatreement',
    price: 29,
    description: 'For good treatment of your skin',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2a/h83/49917508124702/dr-jart-teatreement-moisturizer-hydratant-50-ml-100669442-1-Container.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0e/hea/51557888393246/dr-jart-ctrl-a-teatreement-krem-50-ml-100669442-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/hd6/51557888851998/dr-jart-ctrl-a-teatreement-krem-50-ml-100669442-3.jpg",
    url: "https://kaspi.kz/shop/p/dr-jart-ctrl-a-teatreement-krem-50-ml-100669442/",
    rating: 4
  },
  {
    category: 'Jewelry',
    likes: 0,
    id: 9,
    name: 'Felice',
    price: 200,
    description: 'Very beautiful pendant',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h83/h47/67826497880094/felice-podveska-ke00130-3-2-g-serebro-tsirkonii-103883080-1.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/h2d/67826498142238/felice-podveska-ke00130-3-2-g-serebro-tsirkonii-103883080-2.jpg",
    url: "https://kaspi.kz/shop/p/felice-podveska-ke00130-3-2-g-serebro-tsirkonii-103883080/?c=750000000#!/item",
    rating: 3
  },
  {
    category: 'Jewelry',
    likes: 0,
    id: 12,
    name: 'Earrings',
    price: 250,
    description: 'Gorgeous earrings',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8e/h1c/52316885057566/xuping-jewelry-0002-medicinskaa-stal-bez-vstavok-105726035-1.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/hae/52316885516318/xuping-jewelry-0002-medicinskaa-stal-bez-vstavok-105726035-2.jpg",
    url : "https://kaspi.kz/shop/p/xuping-jewelry-0002-meditsinskaja-stal-bez-vstavok-105726035/?c=750000000#!/item",
    rating: 4
  },
  {
    category: 'Jewelry',
    likes: 0,
    id: 13,
    name: 'Necklace',
    price: 230,
    description: 'A great gold necklace',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hec/h42/52622649851934/fashion-jewelry-2022-cep-pre5-50-sm-bizuternyj-splav-lunnyj-kamen-adular-105904295-1.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/hfe/52622650769438/fashion-jewelry-2022-cep-pre5-50-sm-bizuternyj-splav-lunnyj-kamen-adular-105904295-3.jpg",
    img3 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h05/52622651228190/fashion-jewelry-2022-cep-pre5-50-sm-bizuternyj-splav-lunnyj-kamen-adular-105904295-4.jpg",
    url :"https://kaspi.kz/shop/p/fashion-jewelry-2022-tsep-pre5-50-sm-bizhuternyi-splav-lunnyi-kamen-aduljar--105904295/?c=750000000#!/item",
    rating: 4
  },
  {
    category: 'Jewelry',
    likes: 0,
    id: 14,
    name: 'Golden ring',
    price: 499,
    description: 'A great phone with one of the best cameras',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h85/34107208957982/lucente-diamond-b1055801-17-zoloto-brilliant-101685239-1.jpg",
    url: "https://kaspi.kz/shop/p/lucente-diamond-b1055801-17-17-1-32-g-zoloto-brilliant-101685239/?c=750000000#!/item",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2c/hd0/68934573686814/lucente-diamond-b1055801-17-17-1-32-g-zoloto-brilliant-101685239-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h17/69053194797086/lucente-diamond-b1055801-17-17-1-32-g-zoloto-brilliant-101685239-3.jpg",
    rating: 4
  },
  {
    category: 'Jewelry',
    likes: 0,
    id: 15,
    name: 'Golden Necklace',
    price: 120,
    description: 'Beautiful jewelry',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/hb3/62801505976350/fashion-jewelry-2022-cep-yourself-zolotinka-45-sm-nerzaveusaa-stal-bez-vstavok-106634975-1.jpg",
    img2 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h17/62801506893854/fashion-jewelry-2022-cep-yourself-zolotinka-45-sm-nerzaveusaa-stal-bez-vstavok-106634975-3.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/hcf/62801507352606/fashion-jewelry-2022-cep-yourself-zolotinka-45-sm-nerzaveusaa-stal-bez-vstavok-106634975-4.jpg",
    url: "https://kaspi.kz/shop/p/fashion-jewelry-2022-tsep-yourself-zolotinka-45-sm-nerzhavejuschaja-stal-bez-vstavok-106634975/?c=750000000#!/item",
    rating: 4
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 16,
    name: 'MAKEUPSTOREKZ White set',
    price: 120,
    description: 'A great set of brushes for makeup',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/hd0/49595788034078/nabor-kistej-white-set-104244935-1.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h9a/49595788492830/nabor-kistej-white-set-104244935-2.jpg",
    img3 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h1d/49595887714334/nabor-kistej-white-set-104244935-4.jpg",
    url :"https://kaspi.kz/shop/p/makeupstorekz-white-set-nabor-kistei-18-sht-104244935/?c=750000000#!/item",
    rating: 4
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 17,
    name: 'Tartelette in bloom',
    price: 150,
    description: 'A great palette of eye shadows',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/hb1/31858757042206/tarte-tartelette-in-bloom-100740432-1-Container.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcd/hfa/52039558594590/tarte-tartelette-in-bloom-100740432-2-Container.jpg",
    img3 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/hcd/31858768936990/tarte-tartelette-in-bloom-100740432-3-Container.jpg",
    url :"https://kaspi.kz/shop/p/tarte-pressovannye-tartelette-in-bloom-100740432/?c=750000000#!/item",
    rating: 4
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 18,
    name: 'Estee Lauder Double Wear ',
    price: 240,
    description: 'The best foundation ever',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h12/51267142746142/estee-lauder-double-wear-stay-in-place-makeup-spf10-1w2-sand-30-ml-100086854-1-Container.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4a/hac/61706850435102/estee-lauder-double-wear-tonalnyj-krem-1w2-sand-30-ml-100086854-2.jpg",
    img3 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h94/heb/61706850828318/estee-lauder-double-wear-tonalnyj-krem-1w2-sand-30-ml-100086854-3.jpg",
    url :"https://kaspi.kz/shop/p/estee-lauder-double-wear-tonal-nyi-krem-1w2-sand-30-ml-100086854/?c=750000000#!/item",
    rating: 4
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 19,
    name: 'Charlotte Tilbury Filmstar Bronze&Glow Light Medium',
    price: 699,
    description: 'A good bronzator and highlighter',
    img : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h50/47653811879966/charlotte-tilbury-skulptor-hajlajter-dla-lica-filmstar-bronze-glow-light-medium-103108845-1.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc8/h66/47653812338718/charlotte-tilbury-skulptor-hajlajter-dla-lica-filmstar-bronze-glow-light-medium-103108845-2.jpg",
    img3 : "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h16/h7a/50623390515230/charlotte-tilbury-skulptor-hajlajter-dla-lica-filmstar-bronze-glow-light-medium-103108845-3.jpg",
    url : "https://kaspi.kz/shop/p/charlotte-tilbury-filmstar-bronze-glow-light-medium-nabor-dlja-konturinga-16-g-103108845/?c=750000000#!/item",
    rating: 4
  },
  {
    category: 'Cosmetics',
    likes: 0,
    id: 20,
    name: 'Dior прессованные Backstage 003',
    price: 340,
    description: "The best palette from Dior",
    url: "https://kaspi.kz/shop/p/dior-pressovannye-backstage-003-104927401/?c=750000000#!/item",
    img: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8a/h62/50889586835486/dior-backstage-eye-palette-003-104927401-1.jpg",
    img2: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h99/h02/51995501920286/dior-pressovannye-backstage-003-104927401-2.jpg",
    img3 :"https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/h18/51995502379038/dior-pressovannye-backstage-003-104927401-3.jpg",
    rating: 4
  }
];