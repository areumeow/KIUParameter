
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
    thumbnailUrl: '${BASE_PATH}001.jpg',
    videoUrl: 'https://drive.google.com/file/d/1Srh77zV1IvD1SoNl85TlZ7VZtKQxy5RF/view?usp=drive_link',
    previewVideoUrl: '${BASE_PATH}001.mov' ,
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
    thumbnailUrl: '${BASE_PATH}002.jpg',
    videoUrl: 'https://drive.google.com/file/d/1UF9CSMUwQoRPXj7ysDHorSPqkfIOhGyO/view?usp=drive_link',
    previewVideoUrl: '${BASE_PATH}002.mov' ,
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
    thumbnailUrl: '${BASE_PATH}003.jpg',
    videoUrl: 'https://drive.google.com/file/d/1BWa5bEjaWs8qqo8zD4NoDXKR3-wujLno/view?usp=drive_link',
    previewVideoUrl: '${BASE_PATH}003.mov' ,
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
    thumbnailUrl: '${BASE_PATH}screenshot-16.png',
    videoUrl: 'https://drive.google.com/file/d/1xQo_pTTH6alztkwe0ZSyiF-tuim0lopy/view?usp=drive_link',
    previewVideoUrl: '${BASE_PATH}bomb.mov' ,
    duration: '00:20',
    format: 'MOV / 1280p',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  },
  {
    id: 'j2',
    artist: 'JangMyu',
    title: 'space',
    description: 'mouce in 노드를 이용하여 작품을 만들었으며 우주의 , 탄생 또는 인간의 혈관을 표현 하고자 하였음.',
    thumbnailUrl: '${BASE_PATH}screenshot-29.png',
    videoUrl: 'https://drive.google.com/file/d/1R8y-UYcXFsUdEHduzoxkG7jt-vJZkEI0/view?usp=drive_link',
    previewVideoUrl: '${BASE_PATH}eum.mov' ,
    duration: '00:30',
    format: 'MOV / 1280p',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  },
  {
    id: 'j3',
    artist: 'JangMyu',
    title: 'untitle',
    description: 'mouce in 노드를 이용하여 작품을 만들었으며 우리가 , 탄생하는 과정을 단순하게 표현 하고자 하였음',
    thumbnailUrl: '${BASE_PATH}screenshot-51.png',
    videoUrl: 'https://drive.google.com/file/d/1Sjlx5A0VhC6uTBLpcJz93SblQZkCYs0f/view?usp=drive_link',
    previewVideoUrl: '${BASE_PATH}TDMovie.mov' ,
    duration: '00:25',
    format: 'MOV / 1280p',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  },

  // JeongAreum (3 works)
  {
    id: 'a1',
    artist: 'JeongAreum',
    title: 'FLUID_DYNAMICS_V1',
    description: 'A generative study of fluid simulation using TouchDesigner. This piece explores the relationship between digital viscosity and user input noise.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://cdn.pixabay.com/video/2023/10/26/186638-878266687_large.mp4',
    previewVideoUrl: '' ,
    duration: '01:00',
    format: 'MP4 / 1280*1280',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  },
  {
    id: 'a2',
    artist: 'JeongAreum',
    title: 'CHROMATIC_ABERRATION',
    description: 'Visualizing sound frequencies through chromatic displacement. The colors shift based on low-frequency oscillation data.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://cdn.pixabay.com/video/2023/09/24/182068-867807093_large.mp4',
    previewVideoUrl: '' ,
    duration: '01:00',
    format: 'MP4 / 1280*1280',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  },
  {
    id: 'a3',
    artist: 'JeongAreum',
    title: 'LIQUID_METAL_02',
    description: 'Simulating the reflective properties of mercury under varying light conditions using raymarching.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618557219623-83216d6c7003?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://cdn.pixabay.com/video/2023/04/20/159848-819771120_large.mp4',
    previewVideoUrl: '' ,
    duration: '01:00',
    format: 'MP4 / 1280*1280',
    bankName: 'KB Kookmin Bank',
    accountNumber: '1111-22-3333333',
  }
];
