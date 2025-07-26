interface Props {
  params: {
    projectId: string;
  };
}

const Page = async ({ params }: Props) => {
  const { projectId } = await params;

  return (
    <div>
      <h1>Project ID: {projectId}</h1>
    </div>
  );
};

export default Page;
