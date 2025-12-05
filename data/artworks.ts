export interface Artwork {
  id: string;
  artist: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  previewVideoUrl: string;
  duration: string;
  format: string;
  bankName: string;
  accountNumber: string;
}

export const artworks: Artwork[] = [
  // SongSeungHaw (3 works)
  {
    id: 's1',
    artist: 'SongSeungHaw',
    title: 'Phase Shift',
    description: '감정은 어느 순간 갑자기 방향을 바꾼다. 형태가 뒤틀리며 흔들리는 이 흐름은, 내면이 지금까지의 상태에서 새로운 감정으로 이동하기 직적의 불안정한 전환점을 담고 있다.',
    thumbnailUrl: '/KIUParameter/001.jpg',
    videoUrl: 'https://drive.google.com/file/d/1Srh77zV1IvD1SoNl85TlZ7VZtKQxy5RF/view?usp=drive_link',
    previewVideoUrl: 'https://www.youtube.com/embed/O0yH4JTzcig?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=O0yH4JTzcig' ,
    duration: '00:30',
    format: 'MP4 / 1280*1280',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  },
  {
    id: 's2',
    artist: 'SongSeungHaw',
    title: 'Tranasition Flow',
    description: '감정은 서로 밀어내며 자연스러운 흐름을 만들어낸다. 갑작스러운 변화와 느린 이동이 뒤섞인 장면 속에서 우리는 감정이 고정된 것이 아니라 끊임없이 이동하는 유동적인 상태임을 깨닫게된다.',
    thumbnailUrl: '/KIUParameter/002.jpg',
    videoUrl: 'https://drive.google.com/file/d/1UF9CSMUwQoRPXj7ysDHorSPqkfIOhGyO/view?usp=drive_link',
    previewVideoUrl: 'https://www.youtube.com/embed/dCJYAueyKYI?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=dCJYAueyKYI' ,
    duration: '00:30',
    format: 'MP4 / 1280*1280',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  },
  {
    id: 's3',
    artist: 'SongSeungHaw',
    title: 'Settle Down',
    description: '격한 움직임이 지나가면 감정은 천천히 가라 앉는다. 부서지던 흔적이 정리되고, 흐트러진 파동이 하나의 결로 모여들며 감정이 새로운 균형을 찾아가는 과정을 담았다.',
    thumbnailUrl: '/KIUParameter/003.jpg',
    videoUrl: 'https://drive.google.com/file/d/1BWa5bEjaWs8qqo8zD4NoDXKR3-wujLno/view?usp=drive_link',
    previewVideoUrl: 'https://www.youtube.com/embed/oUoegmkARXQ?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=oUoegmkARXQ' ,
    duration: '00:30',
    format: 'MP4 / 1280*1280',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  },

  // JangMyu (3 works)
  {
    id: 'j1',
    artist: 'JangMyu',
    title: 'sparcle',
    description: 'mouce in 노드를 이용하여 불꽃놀이를 표현 해봤으며 이, 작품은 요즘 시대의 도파민 중독을 풍자하고자 하였음.',
    thumbnailUrl: '/KIUParameter/screenshot-16.png',
    videoUrl: 'https://drive.google.com/file/d/1xQo_pTTH6alztkwe0ZSyiF-tuim0lopy/view?usp=drive_link',
    previewVideoUrl: 'https://www.youtube.com/embed/bRbFQzJ90S0?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=bRbFQzJ90S0' ,
    duration: '00:45',
    format: 'MOV / 1280p',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  },
  {
    id: 'j2',
    artist: 'JangMyu',
    title: 'space',
    description: 'mouce in 노드를 이용하여 작품을 만들었으며 우주의 , 탄생 또는 인간의 혈관을 표현 하고자 하였음.',
    thumbnailUrl: '/KIUParameter/screenshot-29.png',
    videoUrl: 'https://drive.google.com/file/d/1R8y-UYcXFsUdEHduzoxkG7jt-vJZkEI0/view?usp=drive_link',
    previewVideoUrl: 'https://www.youtube.com/embed/XI1k1uzF9Wc?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=XI1k1uzF9Wc' ,
    duration: '00:40',
    format: 'MOV / 1280p',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  },
  {
    id: 'j3',
    artist: 'JangMyu',
    title: 'untitle',
    description: 'mouce in 노드를 이용하여 작품을 만들었으며 우리가 , 탄생하는 과정을 단순하게 표현 하고자 하였음',
    thumbnailUrl: '/KIUParameter/screenshot-51.png',
    videoUrl: 'https://drive.google.com/file/d/1Sjlx5A0VhC6uTBLpcJz93SblQZkCYs0f/view?usp=drive_link',
    previewVideoUrl: 'https://www.youtube.com/embed/b2-LyjxM7ic?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=b2-LyjxM7ic' ,
    duration: '00:41',
    format: 'MOV / 1280p',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  },

  // JeongAreum (3 works)
  {
    id: 'a1',
    artist: 'JeongAreum',
    title: '한글의 춤',
    description: '끊임없이 흘러내리는 한글의 움직임은 마치 거친 노이즈 같다. 이 작품은 명확하던 문자가 춤추듯 부서지고 소멸하는 과정을 통해, 잊혀가는 한글의 가치와 언어의 상실을 시각화했다. 흩어지는 글자들의 군상은 우리가 지켜야 할 것들이 사라지고 있음을 알리는 무언의 신호다.',
    thumbnailUrl: '/KIUParameter/hangule.png',
    videoUrl: 'https://drive.google.com/file/d/1p4CjyhT1g-2fi7Fvl62-15YZYK1wPckZ/view?usp=drive_link',
    previewVideoUrl: 'https://www.youtube.com/embed/JYxwiqJD3qc?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=JYxwiqJD3qc' ,
    duration: '01:00',
    format: 'MP4 / 1280*1280',
    bankName: 'Toss Bank',
    accountNumber: '1000-9300-4373',
  },
  {
    id: 'a2',
    artist: 'JeongAreum',
    title: '응집된 흐름',
    description: '선들이 불규칙하게 엉켜 만들어낸 덩어리가 파도의 넘실거림을 형상화한다. 어지럽게 뒤엉킨 듯 보이지만 전체적으로는 유려한 흐름을 가진 이 형상은, 거친 파도를 바라볼 때의 복합적인 감상을 담고 있다. 덩어리진 선들의 움직임을 따라가다 보면, 복잡함 속에 숨겨진 고요와 평온을 마주하게 된다.',
    thumbnailUrl: '/KIUParameter/pado.png',
    videoUrl: 'https://drive.google.com/file/d/1WqL5UCnwl_NafAa2w9OSKUdivLYz_qdL/view?usp=drive_link',
    previewVideoUrl: 'https://www.youtube.com/embed/y1MrTiS-PfQ?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=y1MrTiS-PfQ' ,
    duration: '01:00',
    format: 'MP4 / 1280*1280',
    bankName: 'Toss Bank',
    accountNumber: '1000-9300-4373',
  },
  {
    id: 'a3',
    artist: 'JeongAreum',
    title: '인공의 개화',
    description: '실험용 플라스크가 폭발적으로 해체되며 뻗어 나가는 파편들이 아이러니하게도 나무의 형상을 그린다. 끊임없는 실험과 개발은 인류에게 새로움과 편리를 가져다주었지만, 그 대가로 우리는 푸른 자연을 잃어가고 있다. 인공적인 유리가 빚어낸 이 차가운 나무는, 문명의 발전이 필연적으로 자연의 훼손을 딛고 서 있다는 현대 사회의 씁쓸한 역설을 상징한다.',
    thumbnailUrl: '/KIUParameter/simple.png',
    videoUrl: 'https://drive.google.com/file/d/1sP_kvNuwWTsGtU31Ctnnb6k4Hhqge_lt/view?usp=drive_link',
    previewVideoUrl: 'https://www.youtube.com/embed/ocz9aBC76hs?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=ocz9aBC76hs' ,
    duration: '01:00',
    format: 'MP4 / 1280*1280',
    bankName: 'Toss Bank',
    accountNumber: '1000-9300-4373',
  }
];