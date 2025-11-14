import styles from "./Home.module.css";
import Header from "../../components/Header";
import { useState } from "react";
import type { Extension } from "../../hooks/useExtensions";
import useExtensions from "../../hooks/useExtensions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog.tsx";

function Index() {
  const [filter, setFilter] = useState("all");
  const { extensions, onDeleteExtension, handleToggleActive } = useExtensions();

  const filteredExtensions = extensions.filter((extension) => {
    if (filter === "active") return extension.isActive;
    if (filter === "inactive") return !extension.isActive;
    return true;
  });

  const [selectedExtension, setSelectedExtension] = useState<Extension | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div>
        <div className="flex justify-between flex-wrap gap-3">
          <h1 className="text-[#f9fefff1] text-3xl font-bold">
            Lista de Extensões
          </h1>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setFilter("all")}
              className={`py-1 px-3 bg-[#1f2535] cursor-pointer rounded-[20px]  hover:bg-[#ffffff49] border border-[#ffffff1e] text-[#f9fefff1] ${
                filter === "all"
                  ? "bg-[#ef5e51] hover:bg-[#ef5e51]! text-black"
                  : ""
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`py-1 px-3 bg-[#1f2535] cursor-pointer rounded-[20px]  hover:bg-[#ffffff49] border border-[#ffffff1e] text-[#f9fefff1] ${
                filter === "active"
                  ? "bg-[#ef5e51]  hover:bg-[#ef5e51]! text-black"
                  : ""
              }`}
            >
              Ativos
            </button>
            <button
              onClick={() => setFilter("inactive")}
              className={`py-1 px-3 bg-[#1f2535] cursor-pointer rounded-[20px]  hover:bg-[#ffffff49] border border-[#ffffff1e] text-[#f9fefff1] ${
                filter === "inactive"
                  ? "bg-[#ef5e51]  hover:bg-[#ef5e51]! text-black"
                  : ""
              }`}
            >
              Inativos
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-7 gap-3">
          {filteredExtensions.length === 0 ? (   
            <p className="text-[#838997] text-2xl mx-[3px]">
              Nenhuma extensão encontrada.
            </p>
          ) : (
            filteredExtensions.map((extension) => (
              <div
                onClick={() => {
                  setSelectedExtension(extension);
                  setIsOpen(true);
                }}
                key={extension.id}
                className="bg-[#1f2535] rounded-3xl flex flex-col border border-[#ffffff1e] cursor-pointer p-5 max-w-full w-88 h-50"
              >
                <div className="flex">
                  <div
                    className={`${extension.color} h-10 aspect-square flex items-center justify-center rounded-sm`}
                  >
                    <extension.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col ml-5">
                    <h3 className="text-xl text-[#f9fefff1] font-bold">
                      {extension.title}
                    </h3>
                    <p className="text-[15px] text-[#838997]">
                      {extension.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteExtension(extension.id);
                    }}
                    className="cursor-pointer rounded-[20px] border border-[#ffffff7c] text-[#f9fefff1] bg-transparent hover:bg-[#ffffff1f] w-22 h-9"
                  >
                    Remover
                  </button>
                  <label
                    className={styles.switch}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      checked={extension.isActive}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleToggleActive(extension.id, !extension.isActive);
                      }}
                    />
                    <span className={styles.slider}></span>
                  </label>
                </div>
              </div>
            ))
          )}
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="bg-[#1f2535] w-125 h-75 rounded-3xl flex justify-center">
              <DialogHeader className="mx-6!">
                <DialogTitle className="text-[#f9fefff1] text-4xl! text-center font-bold my-6!">
                  {selectedExtension?.title}
                </DialogTitle>
                <DialogDescription className="text-xl text-[#f9feffd5]">
                  {selectedExtension?.description}
                </DialogDescription>
                <DialogDescription className="text-[#f9fefff1] mt-6">
                  <strong>Categoria:</strong> {selectedExtension?.nmCategory}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Index;
