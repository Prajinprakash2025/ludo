// Short film excerpts only. Each entry records the verification source.
// Cross-film reply pairs below are game arrangements, not original film scenes.
const sources={
  nadodi:'https://ml.wikiquote.org/wiki/നാടോടിക്കാറ്റ്',
  pavanayi:'https://www.reporterlive.com/entertainment/special/2023/09/17/malayalam-actor-captain-raju-fifth-death-anniversary',
  mamukkoya:'https://www.asianetnews.com/special-entertainment/mamukkoya-celebrated-for-his-thug-dialogues-hyp-rtpwu5',
  sreeni:'https://www.samakalikamalayalam.com/movie-news/sreenivasan-made-these-dialouges-immortal',
  lal:'https://malayalam.samayam.com/malayalam-cinema/celebrity-news/happy-birthday-superstar-mohanlal-iconic-dialogues-of-the-complete-actor-mohanlal/articleshow/82827096.cms',
  mass:'https://www.newindianexpress.com/cities/kochi/2022/May/18/chambikko-mone-dinesha-2454779.html',
  salim:'https://www.newsmalayalam.com/newsroom/kerala/malayalam-actor-salim-kumar-best-dialogues-ever',
  suraj:'https://www.manoramaonline.com/movies/movie-news/2025/01/26/memes-from-shafi-cinemas.html',
  pappu:'https://www.madhyamam.com/amp/entertainment/nostalgia/remembrance-of-kuthiravattam-pappu-in-his-25th-death-anniversary-1383584',
  ramanan:'https://www.southlive.in/movie/film-news/celebrating-25-years-of-malayalam-cinema-punjabi-house-rafi-meccartin-dileep-ramanan-mothalali',
  soulmates:'https://www.newindianexpress.com/amp/story/kerala/2026/Sep/08/i-want-to-do-more-humour-roles-says-actress-parvathy-ayyappadas',
  bku:'https://www.malayalamtv9.com/entertainment/bethlehem-kudumba-unit-social-media-buzz-viewers-decode-every-detail-and-reference-following-ott-release-2236653.html'
};
const quote=(text,actor,film,source)=>({text,actor,film,source:sources[source]});
export const MOVIE_QUOTES={
  alavalathi:quote('എടാ ദാസാ… ഏതാ ഈ അലവലാതി?','Sreenivasan','Nadodikkattu','nadodi'),
  crying:quote('അവറ്റകളുടെ കരച്ചിൽ കേൾക്കാൻ തന്നെ എന്തൊരു സുഖം!','Mohanlal','Nadodikkattu','nadodi'),
  siren:quote('ഐശ്വര്യത്തിന്റെ സൈറൻ മുഴങ്ങുന്നതുപോലെയുണ്ടല്ലേ.','Sreenivasan','Nadodikkattu','nadodi'),
  pavanayi:quote('ലുക്ക് മിസ്റ്റർ, ഐ ആം നോട്ട് ആൻ അലവലാതി… ഐ ആം പവനായി!','Captain Raju','Nadodikkattu','pavanayi'),
  olakka:quote('ഒലക്ക!','Mamukkoya','Comic counter excerpt','mamukkoya'),
  bappa:quote('അന്‍റെ ബാപ്പ!','Mamukkoya','Comic counter excerpt','mamukkoya'),
  thorappa:quote('ഇറങ്ങിവാടാ തൊരപ്പാ!','Mamukkoya','Ramji Rao Speaking','mamukkoya'),
  sorry:quote('സോറി, നിങ്ങളല്ല… വേറൊരു തൊരപ്പൻ!','Mamukkoya','Ramji Rao Speaking','mamukkoya'),
  god:quote('പടച്ച തമ്പുരാനെ വിളിച്ച് കാണിച്ച് തരാമോ?','Mamukkoya','Ramji Rao Speaking','mamukkoya'),
  dream:quote('എത്ര മനോഹരമായ നടക്കാത്ത സ്വപ്നം!','Sreenivasan','Nadodikkattu','sreeni'),
  figure:quote('എന്റെ തല, എന്റെ ഫുൾ ഫിഗർ!','Sreenivasan','Udayananu Tharam','sreeni'),
  coconut:quote('ഒന്ന് തേങ്ങ ഉടയ്ക്ക് സ്വാമി!','Sreenivasan','Akkare Akkare Akkare','sreeni'),
  choyich:quote('നമുക്ക് ചോയിച്ച് ചോയിച്ച് പോവ്വാം.','Mohanlal','Ayal Kadha Ezhuthukayanu','lal'),
  porunno:quote('പോരുന്നോ എന്റെ കൂടെ?','Mohanlal','Thenmavin Kombathu','lal'),
  enemy:quote('ജാക്കി എന്ന ശത്രുവിനെ നിനക്കറിയില്ല!','Mohanlal','Sagar Alias Jacky','lal'),
  lelu:quote('ലേലു അല്ലു… ലേലു അല്ലു!','Mohanlal','Thenmavin Kombathu','mass'),
  dinesha:quote('പോ മോനേ ദിനേശാ!','Mohanlal','Narasimham','mass'),
  savari:quote('സവാരിഗിരിഗിരി!','Mohanlal','Ravanaprabhu','mass'),
  mallayya:quote('ഇനി നമ്മൾ എന്തും ചെയ്യും മല്ലയ്യാ!','Mohanlal','Ravanaprabhu','mass'),
  sambar:quote('എന്തിനോ വേണ്ടി തിളക്കുന്ന സാമ്പാർ!','Salim Kumar','Kalyanaraman','salim'),
  buddhi:quote('ഒടുക്കത്തെ ബുദ്ധിയാ!','Salim Kumar','Meesha Madhavan','salim'),
  mirimayam:quote('ഇതെന്ത് മറിമായം?','Salim Kumar','Mayavi','salim'),
  padakkam:quote('അങ്ങനെ പടക്ക കമ്പനി ഖുദാ ഹവാ!','Salim Kumar','Pulival Kalyanam','salim'),
  odikko:quote('ആരും പേടിക്കണ്ട… ഓടിക്കോ!','Salim Kumar','Hello','salim'),
  shivane:quote('എന്റെ ശിവനേ!','Suraj Venjaramoodu','Chattambinadu','suraj'),
  district:quote('ശിവനേ ഇത് ഏത് ജില്ലാ!','Suraj Venjaramoodu','Chattambinadu','suraj'),
  taxi:quote('ടാസ്കി വിളിയെടാ!','Kuthiravattam Pappu','Thenmavin Kombathu','pappu'),
  repair:quote('ഇപ്പോ ശരിയാക്കി തരാം…','Kuthiravattam Pappu','Vellanakalude Naadu','pappu'),
  ramanan:quote('മൊതലാളി ജങ്ക ജഗ ജഗാ!','Harisree Ashokan','Punjabi House','ramanan'),
  produce:quote("Don't produce too much… ok?",'Parvathy Ayyappadas','Soulmates – Oru Sathukkudi Pranayam (BKU companion short)','soulmates'),
  brake:quote('ചേട്ടാ ബ്രേക്ക് ഉണ്ടെങ്കിൽ ഒന്ന് അപ്ലൈ ചെയ്തേക്കു!','Suraj reference','Bethlehem Kudumba Unit (quoted reference)','bku'),
  later:quote('ഇപ്പൊ തരാം എന്നാൽ പിന്നെ തരാം!','Meesha Madhavan reference','Bethlehem Kudumba Unit (quoted reference)','bku'),
  ayyappa:quote('അയ്യപ്പാ!','Sangeeth Prathap','Bethlehem Kudumba Unit (Hero reference)','bku')
};

export const MOVIE_EXCHANGES={
  // Victim speaks first; the actual captor answers.
  capture:[['alavalathi','pavanayi'],['bappa','dinesha'],['lelu','savari'],['shivane','crying'],['padakkam','produce'],['olakka','mallayya'],['god','buddhi'],['district','choyich'],['thorappa','sorry']],
  chase:[['brake','olakka'],['shivane','enemy'],['taxi','porunno'],['odikko','savari'],['district','choyich']],
  nearMiss:[['mirimayam','buddhi'],['produce','olakka'],['dinesha','bappa'],['shivane','sorry']],
  escape:[['savari','produce'],['dinesha','olakka'],['odikko','taxi'],['choyich','brake']],
  overtake:[['porunno','bappa'],['mallayya','produce'],['savari','olakka'],['dinesha','brake']]
};
const ids={
  ...Object.fromEntries(Object.entries(MOVIE_EXCHANGES).map(([kind,pairs])=>[kind,pairs.map(([id])=>id)])),
  boast:['pavanayi','dinesha','savari','crying','produce','mallayya','buddhi','sorry'],
  noMove:['sambar','repair','dream','later','coconut','god','mirimayam'],
  victory:['ramanan','savari','mallayya','figure','ayyappa','siren']
};
export const MOVIE_POOLS=Object.fromEntries(Object.entries(ids).map(([kind,list])=>[kind,list.map(id=>MOVIE_QUOTES[id].text)]));
