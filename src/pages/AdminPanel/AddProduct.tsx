import { useForm } from "react-hook-form";
import { addProductToCategory } from "../../services/produtServices";
import {
  ButtonContainer,
  Container,
  Input,
  Section,
  Title,
} from "./addProductStyles";
import {
  CancelOrderButton,
  PlaceOrderButton,
} from "../OrderSummary/orderSummaryStyles";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const payload = {
      cardName: data.cardName,
      cardImage: data.cardImage,
      cardReview: data.cardReviews,
      noOfStar: data.stars,
      newRs: data.newPrice,
      oldRs: data.oldPrice,
      defaultColorCode: data.colorCode,
      defaultColorName: data.colorName,
      defaultSize: data.size,
      isLiked: false,
      colors: [
        {
          colorCode: "#00000",
          colorName: "Black",
        },
        {
          colorCode: "#ff1b1b",
          colorName: "Black",
        },
        {
          colorCode: "#93e6ff",
          colorName: "Gray",
        },
      ],
      sizes: [1, 52, 55],
    };

    console.log("Final Payload:", payload, "Product Name", data.productName);
    await addProductToCategory(data.productName, payload);
    reset();
    toast.success("Added Successfully!", {
      className: "custom-toast",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <Container>
            <Title>Add Product</Title>
            <Input
              placeholder="Product Name"
              {...register("productName", { required: true })}
              style={{ border: errors.productName ? "1px solid red" : "" }}
            />

            <Input
              placeholder="Card Name"
              {...register("cardName", { required: true })}
              style={{ border: errors.cardName ? "1px solid red" : "" }}
            />

            <Input
              placeholder="Card Image"
              {...register("cardImage", { required: true })}
              style={{ border: errors.cardImage ? "1px solid red" : "" }}
            />

            <Input
              placeholder="Card Reviews"
              {...register("cardReviews", { required: true })}
              style={{ border: errors.cardReviews ? "1px solid red" : "" }}
            />

            <Input
              type="number"
              placeholder="No of Stars"
              {...register("stars", { valueAsNumber: true, required: true })}
              style={{ border: errors.stars ? "1px solid red" : "" }}
            />

            <Input
              type="number"
              placeholder="New Rs"
              {...register("newPrice", { valueAsNumber: true, required: true })}
              style={{ border: errors.newPrice ? "1px solid red" : "" }}
            />

            <Input
              type="number"
              placeholder="Old Rs"
              {...register("oldPrice", { valueAsNumber: true, required: true })}
              style={{ border: errors.oldPrice ? "1px solid red" : "" }}
            />

            <Input
              placeholder="Default Color Code"
              {...register("colorCode", { required: true })}
              style={{ border: errors.colorCode ? "1px solid red" : "" }}
            />

            <Input
              placeholder="Default Color Name"
              {...register("colorName", { required: true })}
              style={{ border: errors.colorName ? "1px solid red" : "" }}
            />

            <Input
              type="number"
              placeholder="Default Size"
              {...register("size", { valueAsNumber: true, required: true })}
              style={{ border: errors.size ? "1px solid red" : "" }}
            />

            <ButtonContainer>
              <CancelOrderButton type="button" onClick={() => reset()}>
                Clear
              </CancelOrderButton>

              <PlaceOrderButton type="button" onClick={handleSubmit(onSubmit)}>
                Add
              </PlaceOrderButton>
            </ButtonContainer>
          </Container>
        </Section>
      </form>
    </>
  );
};

export default AddProduct;
