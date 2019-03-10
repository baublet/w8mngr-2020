import * as React from "react";
import Query from "client/components/Apollo/Query";
import foodsQuery from "shared/queries/foods";
import { RouteChildrenProps } from "react-router";
import Foods from "client/components/Food/Foods";
import PageHeading from "client/components/Type/PageHeading";
import ContentContainer from "client/components/Containers/ContentContainer";
import PrimaryButton from "client/components/Button/Primary";

export default function FoodsPage(
  props: RouteChildrenProps
): React.ReactComponentElement<any> {
  return (
    <>
      <PageHeading
        quickLinks={<PrimaryButton to="/food/new">New Food</PrimaryButton>}
      >
        Foods
      </PageHeading>
      <ContentContainer>
        <Query query={foodsQuery}>
          {(props: any) => <Foods foods={props.foods} />}
        </Query>
      </ContentContainer>
    </>
  );
}