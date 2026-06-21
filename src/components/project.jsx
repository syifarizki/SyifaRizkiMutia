import purelipuran from "../assets/images/purelipuran.png";
import versbloom from "../assets/images/versbloom.png";
import ewhale from "../assets/images/e-whale.jpg";
import pasmeal from "../assets/images/pasmeal.png";
import dashboardpasmeal from "../assets/images/dashboardpasmeal.png";
import dekade from "../assets/images/4dekade.png";
import epaper from "../assets/images/epaper.png";
import ProjectCard from "./card/projectCard";
export default function Project() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="text-[#e6e4e2] text-[35px] font-bold tracking-wide mb-6">
          Project
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <ProjectCard
          image={versbloom}
          title="VersBloom"
          technologies={["Laravel", "TailwindCSS"]}
          description="Vers Bloom is an ornamental plant e-commerce website, providing product catalogs, plant information, category-based navigation, and a responsive interface prototype to support users in exploring various plant products online."
        />
        <ProjectCard
          image={purelipuran}
          title="Purelipuran"
          technologies={["JS Vanila", "TailwindCSS"]}
          description="Purelipuran is a tourism website for Penglipuran Village,
              providing village information, tour packages, visitor reviews, and
              online booking through a responsive interface."
        />
        <ProjectCard
          image={ewhale}
          title="E-whale"
          technologies={["React JS", "TailwindCSS"]}
          description="E-Whale is an electronic waste management website, providing user
              registration, authentication, profile management, and information
              on electronic waste categories through a modern and responsive
              interface."
        />
        <ProjectCard
          image={pasmeal}
          title="Pasmeal"
          technologies={["React JS", "TailwindCSS"]}
          description="PasMeal is a campus canteen food ordering website, providing menu
              listings from various stalls, online ordering, real-time order
              tracking, and estimated waiting times through a modern and
              responsive interface."
        />
        <ProjectCard
          image={dashboardpasmeal}
          title="Dashboard Pasmeal"
          technologies={["React JS", "TailwindCSS"]}
          description="  PasMeal Seller Dashboard is a canteen management dashboard,
              providing order monitoring, menu management, sales summaries,
              transaction history, and order status updates through a simple and
              responsive interface."
        />
        <ProjectCard
          image={dekade}
          title="4 Dekade"
          technologies={["TailwindCSS"]}
          description="40 Years of Bisnis Indonesia is a special editorial webpage,
              providing categorized articles, historical stories, and
              commemorative content through an informative and engaging
              interface."
        />
        <ProjectCard
          image={epaper}
          title="E-paper"
          technologies={["Laravel", "TailwindCSS"]}
          description="Bisnis Indonesia E-Paper is a digital newspaper website, providing
              online newspaper editions, headline news, archived editions, and
              easy navigation through various sections in a modern and
              responsive interface."
        />
      </div>
    </div>
  );
}
