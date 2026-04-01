# CSS Kararları

## 1. Breakpoint Seçimi
Bu projede responsive tasarım için mobile-first yaklaşımı kullandım. Varsayılan yapıyı mobil ekranlara göre oluşturdum, ardından 640px ve 1024px kırılım noktalarında düzeni geniş ekranlara uyarladım. 640px değerini tablet geçişi, 1024px değerini ise masaüstü düzeni için seçtim.

## 2. Layout Tercihleri
Header ve navigasyon bölümünde Flexbox kullandım çünkü menü elemanlarını tek eksende hizalamak ve mobilde dikey, büyük ekranlarda yatay göstermek daha kolay oldu. Projeler bölümünde ise kartları satır ve sütun düzeninde yerleştirmek için CSS Grid kullandım. Grid yapısında repeat(auto-fit, minmax(280px, 1fr)) kullanarak kartların ekran genişliğine göre otomatik yerleşmesini sağladım.

## 3. Design Tokens
Renkler, boşluklar, yazı boyutları, radius değerleri ve geçiş süreleri için CSS değişkenleri kullandım. Bu değişkenleri :root içinde tanımlayarak tasarımın her yerinde tutarlı kullanım sağladım. Böylece daha sonra renk veya boşluk değiştirmek gerektiğinde tek yerden düzenleme yapmak kolay hale geldi.

## 4. Typography Kararları
Yazı boyutlarında clamp() kullanarak fluid typography uyguladım. Böylece metinler farklı ekran boyutlarında ne çok küçük ne de gereğinden fazla büyük oldu. Bu yöntemle yazı boyutları ekran genişliğine göre akıcı şekilde ölçeklendi.

## 5. Responsive Stratejiler
Projede önce mobil görünümü oluşturdum, ardından min-width media query kullanarak tablet ve masaüstü düzenlerini ekledim. Hakkımda bölümü mobilde tek sütun, tablette yatay düzen olacak şekilde ayarlandı. Navigasyon mobilde dikey yığın, daha büyük ekranlarda yatay menü biçimine dönüştürüldü.

## 6. Görsel ve Kart Yönetimi
Görsellerin taşmaması için max-width: 100% ve height: auto kullandım. Proje kartlarında görsel alanlarının düzenli görünmesi için object-fit: cover kullandım. Kart yapısında Flexbox kullanarak içerik uzunlukları farklı olsa bile kartların daha dengeli görünmesini sağladım.

## 7. Erişilebilirlik ve Kullanılabilirlik
Klavye ile gezinmeyi desteklemek için skip-link yapısını korudum. Link ve form alanlarında focus durumlarını görünür hale getirdim. Form elemanlarında label, aria-describedby ve gerekli semantic özellikleri kullanarak erişilebilirliği güçlendirdim.