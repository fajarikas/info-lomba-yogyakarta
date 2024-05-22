import { useState } from "react";
import "../../assets/css/styles-kompetisi.css";
import Search from "../../Components/Input/Search";
import { field } from "../../data/field";
import HomeButton from "../../Components/Button/HomeButton";
import CompetitionMenu from "../../Components/Competitions/CompetitionMenu";
import { category } from "../../data/category";

const Competition = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="mx-auto w-[90%]">
        <div className="mt-32 ">
          <div class="">
            <div class="">
              <div class="w-full flex ">
                <Search text="Cari Lomba" />
                <span></span>
                <div class="dropdown">
                  <button className="dropdown-toggle" onClick={handleClick}>
                    Pilih Kategori
                  </button>
                  {open && (
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="categoryDropdown"
                    >
                      {category.map((data, key) => {
                        return (
                          <>
                            <li>
                              <a href={data.link} class="dropdown-item">
                                {data.category}
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <HomeButton text="Upload Lomba" link={"/competition"} />
        </div>

        <div className="container mt-10">
          <div className="">
            {field.map((data, key) => {
              return (
                <button key={key} class="dynamic-button">
                  {data.name}
                </button>
              );
            })}
          </div>
        </div>

        <CompetitionMenu />
      </div>
    </>
  );
};

export default Competition;
