import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MediaCardSkeleton = () => {
  return (
    <Card borderRadius={15} overflow="hidden">
      <Skeleton height="400px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MediaCardSkeleton;
