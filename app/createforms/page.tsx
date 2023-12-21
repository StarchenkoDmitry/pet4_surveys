import SurveyBuilder from "@/components/SurveyBuilder";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header/>
      
      <div>Create forms</div>

      <div className="mx-auto p-2 max-w-[600px] w-full flex-grow rounded bg-slate-400">
        <SurveyBuilder/>
      </div>

      <footer>
        footer
      </footer>
    </main>
  )
}
