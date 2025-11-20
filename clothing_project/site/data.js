const products = [
  // --- MEN'S APPAREL (1–50) ---

  { id: 1, brand: "PUMA", product_id: "528860_37", name: "Train All Day Essential Men's Slim Fit Polo (Light Moss)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/528860/37/mod01/fnd/IND/fmt/png/Train-All-Day-Essential-Men's-Slim-Fit-Polo", gender: "Men", price: "1,369" },

  { id: 2, brand: "PUMA", product_id: "528860_02", name: "Train All Day Essential Men's Slim Fit Polo (PUMA White)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/528860/02/mod01/fnd/IND/fmt/png/Train-All-Day-Essential-Men's-Slim-Fit-Polo", gender: "Men", price: "1,369" },

  { id: 3, brand: "PUMA", product_id: "528860_80", name: "Train All Day Essential Men's Slim Fit Polo (Dark Indigo)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/528860/80/mod01/fnd/IND/fmt/png/Train-All-Day-Essential-Men's-Slim-Fit-Polo", gender: "Men", price: "1,369" },

  { id: 4, brand: "PUMA", product_id: "632715_01", name: "Porsche Legacy Men's Oversized Puff Print Tee (PUMA Black)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/632715/01/mod01/fnd/IND/fmt/png/Porsche-Legacy-Men's-Oversized-Puff-Print-Tee", gender: "Men", price: "3,129" },

  { id: 5, brand: "PUMA", product_id: "632715_14", name: "Porsche Legacy Men's Oversized Puff Print Tee (Clyde Royal)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/632715/14/mod01/fnd/IND/fmt/png/Porsche-Legacy-Men's-Oversized-Puff-Print-Tee", gender: "Men", price: "3,129" },

  { id: 6, brand: "PUMA", product_id: "632715_05", name: "Porsche Legacy Men's Oversized Puff Print Tee (PUMA White)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/632715/05/mod01/fnd/IND/fmt/png/Porsche-Legacy-Men's-Oversized-Puff-Print-Tee", gender: "Men", price: "3,129" },

  { id: 7, brand: "PUMA", product_id: "607094_01", name: "Performance Men's Polo (Puma White)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/607094/01/mod01/fnd/IND/fmt/png/Performance-Men's-Polo", gender: "Men", price: "1,099" },

  { id: 8, brand: "PUMA", product_id: "607094_02", name: "Performance Men's Polo (Puma Black)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/607094/02/mod01/fnd/IND/fmt/png/Performance-Men's-Polo", gender: "Men", price: "1,059" },

  { id: 9, brand: "PUMA", product_id: "607094_03", name: "Performance Men's Polo (Team Power Blue)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/607094/03/mod01/fnd/IND/fmt/png/Performance-Men's-Polo", gender: "Men", price: "899" },

  { id: 10, brand: "PUMA", product_id: "684853_01", name: "Men's Poly Tape Tracksuit (PUMA Black)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/684853/01/mod01/fnd/IND/fmt/png/Men's-Poly-Tape-Tracksuit", gender: "Men", price: "3,069" },

  { id: 11, brand: "PUMA", product_id: "682584_01", name: "No. 1 Logo Men's Track Jacket (PUMA Black)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/682584/01/mod01/fnd/IND/fmt/png/No.-1-Logo-Men's-Track-Jacket", gender: "Men", price: "1,669" },

  { id: 12, brand: "PUMA", product_id: "633016_16", name: "PUMA Class Pinnacle Men's Cotton Hoodie (New Navy)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/633016/16/mod01/fnd/IND/fmt/png/PUMA-Class-Pinnacle-Men's-Cotton-Hoodie", gender: "Men", price: "3,189" },

  { id: 13, brand: "PUMA", product_id: "684853_16", name: "Men's Poly Tape Tracksuit (New Navy)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/684853/16/mod01/fnd/IND/fmt/png/Men's-Poly-Tape-Tracksuit", gender: "Men", price: "3,189" },

  { id: 14, brand: "PUMA", product_id: "629674_01", name: "PUMATECH Full-Zip Men's Hoodie (PUMA Black)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/629674/01/mod01/fnd/IND/fmt/png/PUMATECH-Full-Zip-Men's-Hoodie", gender: "Men", price: "6,847" },

  { id: 15, brand: "PUMA", product_id: "688173_01", name: "Men's Colorblock Woven Tracksuit (PUMA Black)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/688173/01/mod01/fnd/IND/fmt/png/Men's-Colorblock-Woven-Tracksuit", gender: "Men", price: "4,109" },

  { id: 16, brand: "PUMA", product_id: "633936_01", name: "Scuderia Ferrari PUMATECH Men's Full-Zip Hoodie (PUMA Black)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/633936/01/mod01/fnd/IND/fmt/png/Scuderia-Ferrari-PUMATECH-Men's-Full-Zip-Hoodie", gender: "Men", price: "6,739" },

  { id: 17, brand: "PUMA", product_id: "690497_01", name: "Essentials Men's Lightweight Padded Jacket (PUMA Black)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/690497/01/mod01/fnd/IND/fmt/png/Essentials-Men's-Lightweight-Padded-Jacket", gender: "Men", price: "7,373" },

  { id: 18, brand: "PUMA", product_id: "636185_01", name: "Porsche Legacy Men's Relaxed Fit Hoodie (PUMA Black)", image_link: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/636185/01/mod01/fnd/IND/fmt/png/Porsche-Legacy-Men's-Relaxed-Fit-Hoodie", gender: "Men", price: "5,059" },

  { id: 19, brand: "H&M", product_id: "6368185_01", name: " Regular Fit Polo-neck jumper", image_link: "https://image.hm.com/assets/hm/e6/24/e624de3e646a3b4d315e590c07998a1753ddd1cf.jpg?imwidth=1536", gender: "Men", price: "5,059" },

  { id: 20, brand: "H&M", product_id: "6361685_01", name: " Regular Fit Zip-top jumper", image_link: "https://image.hm.com/assets/hm/8f/1a/8f1ac0dbb97299b0139722664fe697edcda5de07.jpg?imwidth=1536", gender: "Men", price: "9,059" },

  { id: 21, brand: "H&M", product_id: "63661865_01", name: " Regular Fit Polo-neck jumper", image_link: "https://image.hm.com/assets/hm/be/ec/beec9827a83abd3ef230e833883296283e99eaf1.jpg?imwidth=1536", gender: "Men", price: "3,059" },

  { id: 22, brand: "H&M", product_id: "6361856_01", name: "Regular Fit Zip cardigan ", image_link: "https://image.hm.com/assets/hm/ac/51/ac5176badbb332a495b15485fe60a4a0f85fa3d0.jpg?imwidth=1536", gender: "Men", price: "6,059" },

  { id: 23, brand: "H&M", product_id: "6361856_01", name: " Regular Fit Zip cardigan", image_link: "https://image.hm.com/assets/hm/55/63/55631220c63c4594f9e3a44d49b15a793a744bc6.jpg?imwidth=1536", gender: "Men", price: "5,659" },

  { id: 24, brand: "H&M", product_id: "6361856_01", name: "Regular Fit Fine-knit wool jumper ", image_link: "https://image.hm.com/assets/hm/43/c8/43c84838836260a0981cf9b3ccffbfa7939ec541.jpg?imwidth=1536", gender: "Men", price: "5,079" },

  { id: 25, brand: "H&M", product_id: "6361856_01", name: "Loose Fit Cable-knit jumper ", image_link: "https://image.hm.com/assets/hm/21/3d/213dec5f3ab61586bf22443f32866fd30fc2dc46.jpg?imwidth=1536", gender: "Men", price: "5,459" },

  // woman

  { id: 26, brand: "Adidas", product_id: "6361856_01", name: "adidas Originals Firebird Loose track pants in black ", image_link: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c2612f2818242e6aead273814eb137a_9366/Firebird_Twill_Crop_Track_Top_Beige_JX7600_21_model.jpg", gender: "woman", price: "5,459" },

  { id: 26, brand: "Adidas", product_id: "6361856_01", name: "Tailored Tracksuit Jacket ", image_link: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/60dec6bfb0604dbcae93fc7f813071cb_9366/Tailored_Tracksuit_Jacket_Brown_JX5311_21_model.jpg", gender: "woman", price: "9,459" },

  { id: 27, brand: "Adidas", product_id: "6361856_01", name: "W ALL SZN SL T ", image_link: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/059c435e572b47c590dd68da707bb023_9366/W_ALL_SZN_SL_T_Black_HZ3909_21_model.jpg", gender: "woman", price: "7,759" },

  { id: 28, brand: "Adidas", product_id: "6361856_01", name: " Essentials Wide Rib Tee", image_link: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/deeb8d962a7d4dd38746641d4ec6081c_9366/Essentials_Wide_Rib_Tee_Pink_JD1489_21_model.jpg", gender: "woman", price: "9,409" },

  { id: 29, brand: "Adidas", product_id: "6361856_01", name: " Adicolor Classics Loose Firebird Track Top", image_link: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf87662205f2457d8246c6db81219702_9366/Adicolor_Classics_Loose_Firebird_Track_Top_Purple_IY4741_21_model.jpg", gender: "woman", price: "9,129" },

  { id: 30, brand: "Adidas", product_id: "6361856_01", name: " Yoga Tee", image_link: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/06045c9ca00e422491a4b22d7032801d_9366/Yoga_Tee_Green_JD4208_21_model.jpg", gender: "woman", price: "4,059" },

  { id: 31, brand: "ASOS", product_id: "6361856_01", name: "Threadbare crew neck knitted jumper in black ", image_link: "https://images.asos-media.com/products/threadbare-crew-neck-knitted-jumper-in-black/208359537-1-black?$n_320w$&wid=317&fit=constrain", gender: "woman", price: "5,459" },

  { id: 32, brand: "ASOS", product_id: "6361856_01", name: " Vero Moda soft o-neck jumper in burgundy", image_link: "https://images.asos-media.com/products/vero-moda-soft-o-neck-jumper-in-burgundy/209124160-1-tawnyportmelange?$n_320w$&wid=317&fit=constrain", gender: "woman", price: "5,459" },

  { id: 33, brand: "ASOS", product_id: "6361856_01", name: " ONLY round neck jumper in stone", image_link: "https://images.asos-media.com/products/only-round-neck-jumper-in-stone/206512288-1-stone?$n_320w$&wid=317&fit=constrain", gender: "woman", price: "5,459" },

  { id: 34, brand: "ASOS", product_id: "6361856_01", name: " Vero Moda round neck knitted jumper in pink", image_link: "https://images.asos-media.com/products/vero-moda-round-neck-knitted-jumper-in-pink/206839931-1-pink?$n_320w$&wid=317&fit=constrain", gender: "woman", price: "5,459" },

  { id: 35, brand: "ASOS", product_id: "6361856_01", name: " ONLY flowers details knitted jumper in pink", image_link: "https://images.asos-media.com/products/only-flowers-details-knitted-jumper-in-pink/209443808-1-pink?$n_320w$&wid=317&fit=constrain", gender: "woman", price: "5,459" },

  { id: 36, brand: "boohoo", product_id: "6361856_01", name: " Balloon Sleeve Wool Look Bomber Jacket", image_link: "https://mediahub.boohoo.com/gzz95945_cranberry_xl?qlt=70&w=100&ssz=true&dpr=2", gender: "woman", price: "5,459" },

  { id: 37, brand: "boohoo", product_id: "6361856_01", name: "Textured Wool Look Cropped Bomber Jacket ", image_link: "https://mediahub.boohoo.com/hzz08874_biscuit_xl?qlt=70&w=100&ssz=true&dpr=2", gender: "woman", price: "5,459" },

  { id: 38, brand: "boohoo", product_id: "6361856_01", name: " Rib Teddy Bomber Jacket", image_link: "https://mediahub.boohoo.com/gzz96247_mushroom_xl?qlt=70&w=100&ssz=true&dpr=2", gender: "woman", price: "5,459" },

  { id: 39, brand: "boohoo", product_id: "6361856_01", name: "Teddy Zip Bomber Jacket ", image_link: "https://mediahub.boohoo.com/hzz39878_mushroom_xl?qlt=70&w=100&ssz=true&dpr=2", gender: "woman", price: "5,459" },

  { id: 40, brand: "boohoo", product_id: "6361856_01", name: " Faux Fur Rib Trim Bombe", image_link: "https://mediahub.boohoo.com/hzz32136_light%20brown_xl?qlt=70&w=100&ssz=true&dpr=2", gender: "woman", price: "5,459" },

  { id: 41, brand: "Depop", product_id: "6361856_01", name: "Satin Lace Trim Maxi Slip Skirt ", image_link: "https://mediahub.boohoo.com/hzz24879_champagne_xl?qlt=70&w=100&ssz=true&dpr=2", gender: "woman", price: "5,459" },

  { id: 42, brand: "Depop", product_id: "6361856_01", name: " Polar Fleece Half Zip Funnel Neck Sweatshirt", image_link: "https://mediahub.boohoo.com/hzz37464_chocolate_xl?qlt=70&w=100&ssz=true&dpr=2", gender: "woman", price: "5,459" },

  { id: 43, brand: "Depop", product_id: "6361856_01", name: " Contrast Panel Half Zip Funnel Neck Sweatshirt", image_link: "https://mediahub.boohoo.com/hzz37458_stone_xl?qlt=70&w=100&ssz=true&dpr=2", gender: "woman", price: "5,459" },

  { id: 44, brand: "Depop", product_id: "6361856_01", name: "Contrast Rib Teddy Bomber Jacket ", image_link: "https://mediahub.boohoo.com/gzz96246_grey_xl?qlt=70&w=100&ssz=true&dpr=2", gender: "woman", price: "5,459" },

  { id: 45, brand: "Depop", product_id: "6361856_01", name: "Fur Hooded Bomber Jacket ", image_link: "https://mediahub.boohoo.com/hzz33724_stone_xl?qlt=70&w=100&ssz=true&dpr=2", gender: "woman", price: "5,459" },

];
