// Components
import TeamCarousel from "../TeamCarousel";

// Sections content data
const sectionsContentData = [
  {
    key: "about",
    title: "Hakkımızda",
    content: (
      <p>
       ...📱✨🎉
      </p>
    ),
  },
  { key: "team", title: "Proje ekibi", content: <TeamCarousel /> },
  {
    key: "credits",
    title: "İletişim",
    content: (
      <ul className="credits">
        <li>
          <a href="#">&#9743; 0216 664 1225</a>
        </li>
        <li>
          <a href="#">&#9758; uzem@subu.edu.tr</a>
        </li><br/>
        <li>
          <a href="#">&#9750; Kemalpaşa Mah.SAÜ Kampüsü,SUBÜ UZEM</a>
        </li>
      </ul>
    ),
  },
];

export default sectionsContentData;
