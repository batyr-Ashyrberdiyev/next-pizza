import {
  Container,
  ProductCard,
  ProductGroupList,
  Title,
  TopBar,
} from "@/components/shared";
import { Filters } from "@/components/shared/filters";
import { pizzasData } from "@/data/pizzas.data";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Filter */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Product List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title={"Пиццы"}
                items={pizzasData}
                categoryId={0}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
