import { Container, ProductGroupList, Title, TopBar } from '@/components/shared';
import { Filters } from '@/components/shared/filters';
import { findPizzas, GetSearchParams } from '@/lib/find-pizzas';
import { Suspense } from 'react';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories.filter((item) => item.products.length > 0)} />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          {/* Filter */}
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Product List */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (item) =>
                  item.products.length > 0 && (
                    <ProductGroupList
                      key={item.id}
                      title={item.name}
                      items={item.products}
                      categoryId={item.id}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
