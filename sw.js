// 최소 서비스 워커: 설치(홈 화면 추가) 조건을 맞추기 위한 것. 캐시하지 않고 항상 네트워크에서 받아요.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
