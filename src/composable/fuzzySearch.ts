import { type MaybeRef, get } from '@vueuse/core';
import Fuse from 'fuse.js';
import { computed } from 'vue';

export { useFuzzySearch };

function useFuzzySearch<Data>({
  search,
  data,
  options = {},
}: {
  search: MaybeRef<string>
  data: MaybeRef<Data[]>
  options?: Fuse.IFuseOptions<Data> & { filterEmpty?: boolean }
}) {
  const dataValue = computed(() => get(data));
  const fuse = computed(() => new Fuse(dataValue.value, options));
  const filterEmpty = options.filterEmpty ?? true;

  const searchResult = computed<Data[]>(() => {
    const query = get(search);

    if (!filterEmpty && query === '') {
      return dataValue.value;
    }

    return fuse.value.search(query).map(({ item }) => item);
  });

  return { searchResult };
}
