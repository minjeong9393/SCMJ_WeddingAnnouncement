/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "허신철",
    nameEn: "Groom",
    father: "허용길",
    mother: "강성남",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김민정",
    nameEn: "Bride",
    father: "김광석",
    mother: "임명주",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "",
    time: "",
    venue: "",
    hall: "",
    address: "",
    tel: "",
    mapLinks: {
      kakao: "",
      naver: ""
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들께 전합니다",
    content: "저희 두 사람이\n서로의 앞날을 함께하기로 약속하고\n부부의 연을 맺게 되었습니다.\n\n거창한 예식 대신 소중한 분들께\n마음을 전하는 것으로 식을 대신하고자 합니다.\n\n일일이 찾아뵙고 인사드리지 못해 송구한 마음이나\n멀리서나마 저희의 새로운 출발을\n축복해 주시면 감사하겠습니다.\n\n깊은 이해를 부탁드리며\n먼 자리에서도 보내주시는 마음과 축복에\n진심으로 감사드리며 그 마음을 소중히 기억하며\n서로 아끼고 행복하게 살아가겠습니다."
    
    
    
    
    
    
    
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "저희 두 사람\n인생의 길을 함께 걷기로 했습니다.\n따로 예식을 진행하지 않아 일일이 얼굴 뵙고\n인사드리지 못하는 점 송구스럽게 생각합니다.\n\n멀리서나마 저희의 출발을\n축하해 주시는 것만으로도 큰 힘이 됩니다.\n\n소중한 축하의 마음을 보내주신다면\n저희가 정성껏 준비한 답례품으로\n감사의 인사를 다시 올리겠습니다.\n부담 없이 마음 편히 축복해 주시면 감사하겠습니다."},

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "허신철", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "허용길", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "강성남", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김민정", bank: "카카오뱅크", number: "3333-11-6598687" },
      { role: "아버지", name: "김광석", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "임명주", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "･:*:･ﾟ𝑺𝑪&𝑴𝑱･:*:･ﾟ",

    description: "[허신철♥김민정]새로운 시작을 전합니다."
  }
};
