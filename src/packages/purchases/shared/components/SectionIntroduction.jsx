import { MdOutlineStarOutline, } from "react-icons/md";
import { Button, } from "@/components";

const SectionIntroduction = ({text = "New section "}) => {
  return (
    <div className="section_introduction">
                    <h2>{text}</h2>
                    <Button>
                        <MdOutlineStarOutline size={20} />
                    </Button>
                </div>
  )
}

export default SectionIntroduction