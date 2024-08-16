import { TeamCard } from "@/app/ui/widgets/cards/team-card";
import { teamData } from "@/app/lib/team-data";

export function InvokSkeleton() {
  return (
    <div className="flex flex-row items-center justify-between border-b border-gray-100 py-4">
      <div className="flex items-center">
        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
        <div className="min-w-0">
          <div className="h-5 w-40 rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
        </div>
      </div>
      <div className="mt-2 h-4 w-12 rounded-md bg-gray-200" />
    </div>
  );
}

export function Section2() {
  return (
    <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <div className="mx-auto w-full px-4 text-center lg:w-6/12">
            <p>This is another paragraph.</p>
            <p>This is another paragraph.</p>
          </div>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            
          </div>
        </div>
      </section>
  );
}

export function MainPageSection() {
  return (
    <div>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100" />
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
        <div className="bg-white px-6">
          <InvokSkeleton />
          <InvokSkeleton />
          <InvokSkeleton />
          <InvokSkeleton />
          <InvokSkeleton />
          <Section2 />
          <div className="flex items-center pb-2 pt-6">
            <div className="h-5 w-5 rounded-full bg-gray-200" />
            <div className="ml-2 h-4 w-20 rounded-md bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

