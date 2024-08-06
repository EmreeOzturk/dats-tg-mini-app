import EarnInfoSection from "@/components/earn/earn-info"
import TaskList from "@/components/earn/task-list"
const EarnPage = () => {
  return (
    <div className="h-full  flex flex-col items-center justify-start w-full px-8">

      {/* <EarnInfoSection /> */}
      <TaskList />
    </div>
  )
}

export default EarnPage