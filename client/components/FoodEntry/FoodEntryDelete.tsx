import * as React from "react";
import { Mutation } from "react-apollo";
import deleteFoodEntryQuery from "queries/foodEntry.delete";
import foodLogQuery from "queries/foodLog";
import { FoodEntryType } from "api/foodEntries/types";
import TransparentIconButton from "components/Button/TransparentIcon";
import CloseIcon from "components/Icons/Close";

interface FoodEntryDeleteProps {
  id: number;
  day: number;
}

export default function FoodEntryDelete(
  props: FoodEntryDeleteProps
): React.ReactComponentElement<any> {
  if (props.id == -1) return null;
  return (
    <Mutation mutation={deleteFoodEntryQuery}>
      {deleteFoodEntry => (
        <TransparentIconButton
          className="absolute pin-r pin-t"
          onClick={(e: any) => {
            deleteFoodEntry({
              variables: { id: props.id },
              update: (proxy, { data: { deleteFoodEntry } }) => {
                // Read the data from our cache for this query.
                const data: any = proxy.readQuery({
                  query: foodLogQuery,
                  variables: { day: props.day }
                });
                proxy.writeQuery({
                  query: foodLogQuery,
                  variables: { day: props.day },
                  data: {
                    foodEntries: data.foodEntries.filter(
                      (entry: FoodEntryType) => entry.id !== props.id
                    )
                  }
                });
              }
            });
          }}
        >
          <CloseIcon />
        </TransparentIconButton>
      )}
    </Mutation>
  );
}
