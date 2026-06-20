const Document = async ({ params }) => {
    const { documentId } = await params;

    return (
        <div>
            yooo my id is: {documentId}
        </div>
    )
}

export default Document;