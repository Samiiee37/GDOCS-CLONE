//imports
import Editor from "@/components/mine/editor";

const Document = async ({ params }) => {
    const { documentId } = await params;

    return (
        <div className="min-h-screen bg-[#FAFBFD]">
            <Editor/>
        </div>
    )
}

export default Document;