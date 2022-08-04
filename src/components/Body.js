import { Artigo } from "./Artigo";
import { Sidebar } from "./Sidebar";
import './Body.css';

export function Body() {
    const itemsSidebar = [
        "Section 1", "Section 2", "Section 3", "Section 4", "Section 5",
        "Section 6", "Section 7", "Section 8", "Section 9", "Section 10",
        "Section 11", "Section 12", "Section 13", "Section 14", "Section 15"
    ];
    return (
        <main>
            <section className="Section-body">
                <div>
                    <Artigo />
                    <Artigo />
                    <Artigo />
                </div>
                <div>
                    <Sidebar items={itemsSidebar} />
                </div>
            </section>

        </main>
    )
}