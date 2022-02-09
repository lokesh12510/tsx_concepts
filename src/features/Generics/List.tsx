interface ListProps<T> {
  items: T[];
  onClick: (value: T) => void;
}
export const List = <T extends { id: number; name: string }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
