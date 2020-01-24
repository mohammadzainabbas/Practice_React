extern "C" float mandelIter(float x, float y, int maxIter)
{
    float r = x;
    float i = y;
    for (int a = 0; a < maxIter; a++)
    {
        float tmpr = r * r - i * i + x;
        float tmpi = 2 * r * i + y;

        r = tmpr;
        i = tmpi;

        if (r * i > 5)
        {
            return a / (float)maxIter * 100;
        }
    }

    return 0;
}