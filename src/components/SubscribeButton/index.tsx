import { signIn, useSession } from "next-auth/react";
import styles from "./styles.module.scss";
import { api } from "../../../services/api";
import { getStripeJS } from "../../../services/stripe-js";
import { useRouter } from "next/router";

interface SubscribeButtonProps {
  productId: string;
}
export function SubscribeButton({ productId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubscribe = async () => {
    if (!session) {
      signIn("github");
      return;
    }

    if (session?.activeSubscription) {
      router.push("/posts");
      return;
    }
    try {
      const response = await api.post("/subscribe");
      console.log(response);

      const { sessionId } = response.data;

      const stripe = await getStripeJS();

      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.log(error);
      // alert(error);
    }
  };

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
