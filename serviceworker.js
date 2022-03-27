const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/script.js",
  "/images/banner-bg.webp",
  "/images/blog-1.jpg",
  "/images/blog-2.jpg",
  "/images/blog-3.jpg",
  "/images/cart-img-1.png",
  "/images/cart-img-2.png",
  "/images/cart-img-3.png",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })